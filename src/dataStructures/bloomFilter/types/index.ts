export interface BloomFilterInterface {
  insert: (item: string) => void;
  contain: (item: string) => boolean;
  hash1: (item: string) => number;
  hash2: (item: string) => number;
  hash3: (item: string) => number;
  getHashValues: (item: string) => number[];
}
