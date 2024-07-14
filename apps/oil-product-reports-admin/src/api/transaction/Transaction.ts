export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  oilName: string | null;
  literPrice: number | null;
  literDeliv: number | null;
  amountDeliv: number | null;
  amountLast: number | null;
  oilLongName: string | null;
  typeField?: "Option1" | null;
  source: string | null;
  literLast: number | null;
};
