document.addEventListener('DOMContentLoaded', () => {
    const createChart = (ctx, type, label, data, bgColor, borderColor) => {
        return new Chart(ctx, {
            type: type,
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: label,
                    backgroundColor: bgColor,
                    borderColor: borderColor,
                    borderWidth: 1,
                    data: data
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#0f0'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#0f0'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#0f0'
                        }
                    }
                }
            }
        });
    };

    // User Interactions Chart
    const userInteractionCtx = document.getElementById('user-interaction-chart').getContext('2d');
    createChart(userInteractionCtx, 'line', 'Active Users', [850, 870, 860, 900, 920, 950, 980], 'rgba(0,255,0,0.2)', 'rgba(0,255,0,1)');

    // Community Posts Chart
    const communityPostsCtx = document.getElementById('community-posts-chart').getContext('2d');
    createChart(communityPostsCtx, 'bar', 'New Posts', [30, 25, 35, 40, 50, 45, 60], 'rgba(0,128,255,0.6)', 'rgba(0,128,255,1)');

    // Ad Revenue Chart
    const adRevenueCtx = document.getElementById('ad-revenue-chart').getContext('2d');
    createChart(adRevenueCtx, 'line', 'Ad Revenue', [200, 220, 250, 280, 300, 350, 400], 'rgba(255,215,0,0.2)', 'rgba(255,215,0,1)');

    // Data Insights Chart
    const dataInsightsCtx = document.getElementById('data-insights-chart').getContext('2d');
    createChart(dataInsightsCtx, 'doughnut', 'Data Insights', [10, 20, 30, 40], ['rgba(0,255,0,0.6)', 'rgba(255,0,0,0.6)', 'rgba(0,0,255,0.6)', 'rgba(255,255,0,0.6)'], ['rgba(0,255,0,1)', 'rgba(255,0,0,1)', 'rgba(0,0,255,1)', 'rgba(255,255,0,1)']);

    // User Registrations Chart
    const userRegistrationsCtx = document.getElementById('user-registrations-chart').getContext('2d');
    createChart(userRegistrationsCtx, 'line', 'New User Registrations', [5, 10, 15, 20, 25, 30, 35], 'rgba(255,105,180,0.2)', 'rgba(255,105,180,1)');

    // Installation Requests Chart
    const installationRequestsCtx = document.getElementById('installation-requests-chart').getContext('2d');
    createChart(installationRequestsCtx, 'bar', 'Installation Requests', [7, 9, 14, 18, 21, 25, 29], 'rgba(0,255,127,0.6)', 'rgba(0,255,127,1)');

    // Loan Applications Chart
    const loanApplicationsCtx = document.getElementById('loan-applications-chart').getContext('2d');
    createChart(loanApplicationsCtx, 'line', 'Loan Applications', [3, 5, 8, 12, 15, 20, 25], 'rgba(123,104,238,0.2)', 'rgba(123,104,238,1)');

    // Maintenance Reports Chart
    const maintenanceReportsCtx = document.getElementById('maintenance-reports-chart').getContext('2d');
    createChart(maintenanceReportsCtx, 'bar', 'Maintenance Reports', [2, 3, 5, 7, 9, 12, 15], 'rgba(255,69,0,0.6)', 'rgba(255,69,0,1)');

    // User Feedback Chart
    const userFeedbackCtx = document.getElementById('user-feedback-chart').getContext('2d');
    createChart(userFeedbackCtx, 'doughnut', 'User Feedback', [30, 40, 20, 10], ['rgba(0,255,0,0.6)', 'rgba(255,255,0,0.6)', 'rgba(255,165,0,0.6)', 'rgba(255,0,0,0.6)'], ['rgba(0,255,0,1)', 'rgba(255,255,0,1)', 'rgba(255,165,0,1)', 'rgba(255,0,0,1)']);
});
