interface SpendInterface {
  name: string;
  amount: number;
  quantity?: number;
  category: 'Factura' | 'Mercado' | 'Kiosco' | 'Compra' | 'Otro';
  date: string;
}

export default SpendInterface;
