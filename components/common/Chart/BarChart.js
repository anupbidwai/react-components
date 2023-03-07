import { Bar } from 'react-chartjs-2';
import { options, data } from '@/components/Common/Chart/PriceHistory/Config';

const BarChart = () => <Bar id="chart" options={options} data={data} />;

export default BarChart;
