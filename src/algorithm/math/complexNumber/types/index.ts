export interface ComplexNumberInterface {
  re: number;
  im: number;
  add: (addend: ComplexNumberInterface | number) => ComplexNumberInterface;
  subtract: (subtrahend: ComplexNumberInterface | number) => ComplexNumberInterface;
  multiply: (multiplicand: ComplexNumberInterface | number) => ComplexNumberInterface;
  divide: (divider: ComplexNumberInterface | number) => ComplexNumberInterface;
  getRadius: () => number;
  getPolarForm: (inRadians: boolean) => { radius: number; phase: number; };
}
