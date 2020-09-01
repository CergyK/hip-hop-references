/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */
window.onload = function () {
    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = [{
        "name": "Michael Jordan",
        "points": 238,
        "color": chart.colors.next(),
        "bullet": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/893.png"
    }, {
        "name": "LeBron James",
        "points": 125,
        "color": chart.colors.next(),
        "bullet": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612747/2019/260x190/2544.png"
    }, {
        "name": "Chris Paul",
        "points": 107,
        "color": chart.colors.next(),
        "bullet": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612760/2019/260x190/101108.png"
    }, {
        "name": "Kobe Bryant",
        "points": 97,
        "color": chart.colors.next(),
        "bullet": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612747/2015/260x190/977.png"
    }, {
        "name": "Yao Ming",
        "points": 91,
        "color": chart.colors.next(),
        "bullet": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/2397.png"
    }, {
        "name": "Scottie Pippen",
        "points": 87,
        "color": chart.colors.next(),
        "bullet": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/937.png"
    }, {
        "name": "James Harden",
        "points": 74,
        "color": chart.colors.next(),
        "bullet": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612745/2019/260x190/201935.png"
    }, {
        "name": "Magic Johnson",
        "points": 64,
        "color": chart.colors.next(),
        "bullet": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/77142.png"
    }, {
        "name": "Reggie Miller",
        "points": 63,
        "color": chart.colors.next(),
        "bullet": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/397.png"
    }, {
        "name": "Dennis Rodman",
        "points": 61,
        "color": chart.colors.next(),
        "bullet": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/23.png"
    }, {
        "name": "John Wall",
        "points": 55,
        "color": chart.colors.next(),
        "bullet": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612764/2019/260x190/202322.png"
    }, {
        "name": "Derrick Rose",
        "points": 53,
        "color": chart.colors.next(),
        "bullet": "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/1610612765/2019/260x190/201565.png"
    }
];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
    categoryAxis.renderer.labels.template.fontSize = 15;
    categoryAxis.renderer.labels.template.fontFamily = 'Comic sans ms';

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeDasharray = "4,4";
    valueAxis.renderer.labels.template.fill = am4core.color("#000");
    valueAxis.renderer.labels.template.fontSize = 10;
    valueAxis.renderer.labels.template.fontFamily = 'Comic sans ms';
    valueAxis.min = 0;

    // Do not crop bullets
    chart.maskBullets = false;

    // Remove padding
    chart.paddingBottom = 0;

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "points";
    series.dataFields.categoryX = "name";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.column.cornerRadiusTopLeft = 15;
    series.columns.template.column.cornerRadiusTopRight = 15;

    // Add bullets
    var bullet = series.bullets.push(new am4charts.Bullet());
    var image = bullet.createChild(am4core.Image);
    image.horizontalCenter = "middle";
    image.verticalCenter = "bottom";
    image.dy = 20;
    image.y = am4core.percent(100);
    image.propertyFields.href = "bullet";
    image.propertyFields.fill = "color";
    image.filters.push(new am4core.DropShadowFilter());
}