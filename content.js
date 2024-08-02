const rows = document.querySelectorAll('.table.jbc-table tbody tr');

rows.forEach(row => {
    const cell = row.querySelector('td .info-content');
    
    if (cell) {
        const currentValue = parseFloat(cell.textContent);

        // 8時間を1日として計算
        const days = Math.floor(currentValue);
        const hours = Math.round((currentValue - days) * 8);

        let formattedValue;
        if (hours > 0) {
            formattedValue = `${days}日+${hours}時間`;
        } else {
            formattedValue = `${days}日`;
        }

        cell.textContent = formattedValue;
    }
});
