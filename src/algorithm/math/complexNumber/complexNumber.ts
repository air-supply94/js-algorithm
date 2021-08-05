
function radianToDegree(radian: number): number {
  return radian * (180 / Math.PI);
}

function conjugate(number: ComplexNumber | number): ComplexNumber {
  const complexNumber = toComplexNumber(number);

  return new ComplexNumber({
    re: complexNumber.re,
    im: -1 * complexNumber.im,
  });
}

function toComplexNumber(x: ComplexNumber | number): ComplexNumber {
  if (x instanceof ComplexNumber) {
    return x;
  }

  return new ComplexNumber({
    re: x as number,
    im: 0,
  });
}

function getPhase(complexNumber: ComplexNumber, inRadians: boolean): number {
  let phase = Math.atan(Math.abs(complexNumber.im) / Math.abs(complexNumber.re));

  if (complexNumber.re < 0 && complexNumber.im > 0) {
    phase = Math.PI - phase;
  } else if (complexNumber.re < 0 && complexNumber.im < 0) {
    phase = -(Math.PI - phase);
  } else if (complexNumber.re > 0 && complexNumber.im < 0) {
    phase = -phase;
  } else if (complexNumber.re === 0 && complexNumber.im > 0) {
    phase = Math.PI / 2;
  } else if (complexNumber.re === 0 && complexNumber.im < 0) {
    phase = -Math.PI / 2;
  } else if (complexNumber.re < 0 && complexNumber.im === 0) {
    phase = Math.PI;
  } else if (complexNumber.re > 0 && complexNumber.im === 0) {
    phase = 0;
  } else if (complexNumber.re === 0 && complexNumber.im === 0) {
    phase = 0;
  }

  if (!inRadians) {
    phase = radianToDegree(phase);
  }

  return phase;
}

export class ComplexNumber {
  public re: number;

  public im: number;

  constructor({
    re = 0,
    im = 0,
  } = {}) {
    this.re = re;
    this.im = im;
  }

  public add(addend: ComplexNumber | number): ComplexNumber {
    const complexAddend = toComplexNumber(addend);

    return new ComplexNumber({
      re: this.re + complexAddend.re,
      im: this.im + complexAddend.im,
    });
  }

  public subtract(subtrahend: ComplexNumber | number): ComplexNumber {
    const complexSubtrahend = toComplexNumber(subtrahend);

    return new ComplexNumber({
      re: this.re - complexSubtrahend.re,
      im: this.im - complexSubtrahend.im,
    });
  }

  public multiply(multiplicand: ComplexNumber | number): ComplexNumber {
    const complexMultiplicand = toComplexNumber(multiplicand);

    return new ComplexNumber({
      re: this.re * complexMultiplicand.re - this.im * complexMultiplicand.im,
      im: this.re * complexMultiplicand.im + this.im * complexMultiplicand.re,
    });
  }

  public divide(divider: ComplexNumber | number): ComplexNumber {
    const complexDivider = toComplexNumber(divider);

    const dividerConjugate = conjugate(complexDivider);

    const finalDivident = this.multiply(dividerConjugate);

    const finalDivider = (complexDivider.re ** 2) + (complexDivider.im ** 2);

    return new ComplexNumber({
      re: finalDivident.re / finalDivider,
      im: finalDivident.im / finalDivider,
    });
  }

  public getRadius(): number {
    return Math.sqrt((this.re ** 2) + (this.im ** 2));
  }

  public getPolarForm(inRadians: boolean): { radius: number; phase: number; } {
    return {
      radius: this.getRadius(),
      phase: getPhase(this, inRadians),
    };
  }
}
