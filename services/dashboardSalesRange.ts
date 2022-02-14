import api from './api';

interface SalesRangeItem {
  date: string;
  total_sold: number;
}

interface DashboardSalesRange {
  sales_ranges: SalesRangeItem[];
}

const DashboardSalesRangeService = {
  index(url: string) {
    return api.get<DashboardSalesRange>(url).then(response => response.data.sales_ranges);
  }
}

export default DashboardSalesRangeService;