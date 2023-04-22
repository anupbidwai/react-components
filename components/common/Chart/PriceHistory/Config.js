/* ===================================================== */
// https://www.npmjs.com/package/react-chartjs-2
// https://react-chartjs-2.js.org/examples/
// https://openbase.io/js/react-chartjs-2/tutorials
// https://www.educative.io/edpresso/chartjs---create-a-histogram

/* For configuration */
// https://www.chartjs.org/
//https://www.chartjs.org/docs/latest/charts/bar.html

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    scales: {
        y: {
            min: 0,
            ticks: {
                font: {
                    family: 'kallisto',
                    weight: '500',
                },
                color: '#a100b8',
            }
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                font: {
                    family: 'kallisto',
                    weight: '500',
                },
                color: '#0401f6',
            }
        }
    },
    plugins: {
        title: {
            display: false,
            text: 'Marketplace',
            position: 'top',
            align: 'end'
        },
        legend: {
            position: 'top',
            align: 'end',
            labels: {
                font: {
                    family: 'kallisto',
                    weight: '500',
                },
                boxWidth: 25,
            }
        }
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Label 1',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            backgroundColor: 'rgba(161, 0, 184, 0.1)',
            borderRadius: 4,
        },
        {
            label: 'Label 2',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            backgroundColor: 'rgba(4, 1, 216, 0.1)',
            borderRadius: 4
        },
    ],
};