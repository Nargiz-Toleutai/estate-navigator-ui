interface Photo {
  source: string;
  title: string;
}

interface Params {
  raw: Record<string, string | number | boolean>;
}

interface AdData {
  title: string;
  address: string;
  params?: Params;
  photos?: Photo[];
}

export type Data = AdData;
