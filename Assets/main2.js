const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const algSelect = $('#Alg')
const timeSelect = $('#test-time')
const networkSelect = $('#network')
const calculateButton = $('button')
// Network and user data
const networkTrace = [
    [5309.98,5355.49,4795.36,5357.79,5203.01,3367.76,5384.56,5407.79,5411.71,5322.17,5318.22,5349.48,5473.96,5310.49,5265.94,5516.72,5314.57,5326.23,5415.45,5357.25,5341.67,5291.83,5481.75,5256.96,5493.32,5353.38,5220.8,5419.65,5369.33,4696.3,4386.94,4071.85,4442.12,4629.69,4562.42,4723.4,4816.45,5206.08,5330.27,5362.37,5086.62,5562.11,5276.53,5411.75,5333.98,5280.72,5389.28,5419.43,5358.34,5372.89,5419.09,5188.76,5228.12,5656.75,5338.93,5411.87,5269.56,5423.42,5314.81,5344.24,5368.93,5283.94,5622.15,5174.34,5370.12,4749.12,4270.2,4416.63,4352.97,4699.7,3795.34,3767.36,4111.38,3985.31,3812.25,4078.04,3342.85,3884.48,3274.88,3204.84,3982.61,4382.04,4513.99,4373.72,3744.01,5223.47,4010.51,4231.13,3007.9,3033.99,2112.64,2209.64,1500,2171.6,2201.07,1675.1,1716.29,1896.32,1539.43,1890.91,1937.51,2100.6,3522.18,3268.71,2702.81,2991.42,2811.11,2222.05,2585.58,2467.52,2819.22,2364.96,2445.85,2375.76,2364.1,2655.96,2282.42,2375.62,2562.64,2549.88,2679.34,2631.54,2772.73,2668.86,1979.23,1990.92,1862.14,2235.73,2340,2123.45,2096.12,2036.1,2048.83,1932.04,2061.05,2458.42,2527.79,2242.89,2071.6,2235.57,2187.75,2142.22,2224,2282.37,2282.39,2269.91,2445.82,2317.44,2293.99,2013.69,1990.39,2047.83,1920.42,1990.36,2037.68,2107.2,2188.86,1872.94,1932.08,2306.87,2550.97,2984.86,2982.78,3169.87,2705.12,3079.49,3380.08,3580.57,3461.59,3697.61,4897.85,4442.65,3698.32,4617.42,3987.16,4223.44,4062.79,4051.08,3744.22,2994.56,3963.27,3824.42,4061.28,4451.33,4299.79,4594.76,4609.17,4746.27,4801.88,4114.39,4118.25,4176.69,4206.36,4267.53,4395.96,4583.19,4629.41,4960.17,4909.17,3462.66
    ],
    [300.9,453.905,456.275,548.785,477.77,444.17,301.95,362,303.6,325.98,300,383.77,851.41,724.695,677.94,605.995,583.875,300,1068.9,794.13,1063.785,1306.055,759.015,887.405,793.92,653.865,585.015,864.14,910.87,804.91,863.235,706.335,607.06,300,871.465,500.66,620.085,981.15,1413.52,1658.205,2251.765,2311.505,2370.74,1413.365,1448.04,1798.3,2018.105,2533.89,2893,1260.975,1144.345,1819.985,2496.385,1694.85,1740.135,2611.385,1892.18,2671.025,2345.28,956.56,1916.93,3079.65,2779.005,2473.2,2577.42,2337.595,2010.44,2107.03,2207.005,2209.18,2466.38,3289.45,3449.6,2882.42,3637.82,3982.235,3920.17,3460.565,4133.445,1783.895,1221.11,687.54,1015.005,1541.69,3105.79,3586.86,3594.715,2856.805,2443.755,2042.945,1368.875,1833.185,1928.24,2589.39,3243.16,1669.77,642.875,840.88,2036.255,2557.155,2452.12,2276.93,2181.42,2501.365,2150.705,1870.18,1691.91,1505.99,944.895,1110.42,1313.225,851.315,300,2134.765,2503.005,3682.445,4601.765,3337.47,2947.11,4763.15,4800,4800,4768.96,4800,4363.69,4800,4800,4719.435,4750.795,4549.81,2627.83,1152.455,415.655,300,300,1133.795,619.285,828.3,930.815,1172.07,1692.87,956.935,1249.965,300,1009.545,1294.85,2315.335,2905.48,3511.27,2520.86,1879.77,2037.695,1862.055,1398.24,457.63,300,1332.505,935.24,1424.66,1954.125,1684.685,1585.89,1914.445,2304.9,2741.355,1681.23,1913.115,1454.115,741.78,300,477.935,301.65,3401.39,3689.69,3546.415,3595.46,3777.24,3681.92,3764.215,3258.4,3968.09,3764.71,4090.725,3101.07,3365.47,1828.98,2569.285,2349.165,2241.82,3435.53,3083.62,2613.855,3476.27,2778.255,2272.845,2343.48,2541.055,2042.215,958.38,1693.75,1563.155,1390.945,1530.935,1618.56,1385.12,1415.775,1296.04,1413.07,1378.415,1108.21,1400.495,2278.845,2324.17,1546.255,2028.36,2483.535,1497.085,1541.2,1714.65,2466.715,2758.515,2653.315,3602.11,2887.09,2466.3,3048.03,3311.13,3316.355,2641.63,3015.315,3231.75,2787.11,3770.93,2933.825,3290.74,3286.33,3960.465,3817.59,4043.33,4466.95,3954.55,4386.26,4502.695,3873.08
    ],
    [4047.2,4639.745,4047.61,4054.155,4064.155,3962.445,3459.835,2302.655,1764.92,3775.43,3120.86,3193.115,4714.345,3981.96,3338.735,906.74,395.46,4800,4800,4606.3,4648.74,4049.56,3547.665,4800,4800,3789.18,4800,4800,4853.805,4742.85,4733.07,4754.11,4864.195,4207.79,4892.665,4131.24,1926.36,3264.475,3818.43,3694.63,1438.76,1811.735,2628.88,2574.42,2881.42,2437.535,2692.565,3506.645,3477.845,3172.48,3074.26,3965.735,4254.675,3541.65,3048.99,4150.895,4659.22,3584.26,1309.805,2045.51,2706.36,2852.02,2989.705,4148.99,3432.06,4179.825,3542.07,4060.9,3919.785,3907.83,4807.855,4159.115,4844.74,3955.255,3808.92,4453.55,4620.84,4379.165,4095.595,4800,4276.195,2976.85,1966.05,3868.935,3709.21,4044.28,3773.04,3420.715,3332.265,3287.425,2767.455,1936.015,1741.605,1836.82,1445.145,1581.335,2968.91,2938.13,2208.615,2036.15,2676.695,2150.11,3857.245,3967.07,4642.31,3895.465,3836.81,4686.665,3036.16,2820.295,3510.18,3281.635,4223.925,4562.905,4738.14,4365.09,3558.195,4051,3413.075,3804.39,2938.025,3276.46,3872.89,3896.455,3693.605,4199.385,4109.445,3857.245,3857.245,2931.655,2050.37,3098.72,3646.85,3106.12,4110.25,3286.145,2984.745,2459.52,3600.295,3409.56,3985.605,3689.76,2585.405,1994.775,2614.035,2259.8,2717.86,2638.62,3244.95,3554.68,3670.64,3440.98,3758.51,3907.885,3575.275,2530.35,1061.175,2539.235,3538.045,2771.125,747.19,991.03,852.15,2265.38,2646.15,3393.795,3048.94,4103.47,4277.96,4675.415,4574.81,4645.995,4007.53,1981.275,3406.2,3868.935,3823.435,3344.22,3514.685,3957.245,4262.6,3588.405,4166.32,3459.83,3100.965,2159.905,1744.73,1087.04,1412.555,756.6,2137.065,3131.645,3212.255,3834.835,4757.135,4800,4865.075,4744.54,4679.28,4501,4503.95,4164.435,3627.92,2681.69,1156.315,2043.555,4800,3813.86,2802.315,2510.375,2004.26,1238.435,2360.69,2568.89,2592.335,2438.09,1874.385,1083.225,561.05,1115.715,2031.75,2031.795,2407.36,2887.17,3050.73,2615.34,2318.965,2394.065,2676.695,2489.675,2594.975,2751.195,2402.975,2352.05,1790.075,301.65,300,888.335,2751.03,3366.71,3276.085,3162.77,2571.495,2403.06
    ],
    [2337.72,2465.425,2435.22,2138.32,1899.365,2103.955,2172.01,1975.38,2099.01,2024.095,1926.69,1811.435,2097.605,2228.44,1948.115,1496.14,1948.605,2281.16,1928.625,1415.47,1996.915,2298.07,2362.07,2337.925,2382.08,2544.165,2587.245,3128.86,2863.715,3107.805,3860.94,3342.945,4233.585,3823.215,3798.8,3837.61,3908.815,4378.905,4330.675,4800,4728.93,4420.815,4260.24,3958.66,3962.44,4063.64,4017.435,4223.82,4742.4,4800,4621.995,4800.96,4457.2,4800,4859.52,4800,4800,4114.805,4585.775,4800,4800,4800,4415.31,4800,4620.84,3759.24,2583.995,4131.24,4151,4811.86,4800,4800,4800,4800,4662.185,4800,4800,4868.875,4800,4800,4800,4869.815,4800,3554.69,4849.72,4568.46,4800,4842.92,4800,4492.265,4800,4800,4800,4800,4800,4800,4800,4637.515,3286.705,3260.34,3462.615,3848.03,3978.06,3935.32,4087.37,4285.65,4289.52,4800,4349.02,4642.805,4800,4229.72,4343.905,3834.12,3273.23,3170.535,3120.865,3674.47,3662.92,3762.09,4048.355,4441.68,4800,4800,4800,4833.365,4800,4780.645,1984.9,1848.56,1815.995,1758.77,1437.705,300,3041.06,4018.26,3155.475,453.3,2148.755,3433.5,4133.745,3942.885,4102.935,3911.94,4398.245,4032.575,4083.49,4402.235,4083.025,4051.69,4045.86,3900.475,3523.345,4044.26,3635.575,3670.55,3974.135,3752.62,3931.22,3681.58,3654.84,3432.285,2616.18,1846.8,2630.355,4060.39,4270.415,4103.36,3039.045,3094.81,2892.685,2510.285,1391.905,2139.015,1627.28,744.75,1459.125,3541.655,3374.66,1052.445,4191.275,3585.825,3310.74,3810.49,3531,3791.235,3779.26,3599.4,2921.455,2930.955,2971.9,3114.135,2852.025,2694.69,2472.505,1998.755,1426.015,1154.87,1062.545,1003.735,676.59,969.395,1377.58,1016.94,1074.355,1026.46,1087.645,699.84,1390.95,1180.55,888.245,1202.76,1262.425,1312.12,1367.6,1333.955,1415.745,1485.975,1507.83,1623.16,1741.605,1938.405,2197.655,2323.965,2737.965,2618.255,2878.02,2618.25,2924.8,2685.54,2653.32,3038.915,3012.66,3146.225,3207.97,2977.43,2536.43,2033.82,2849.65,3479.53,3456.48,2887.09,3305.43,1181.56
    ],
]
const userTrace_3min = [3.72687272, 10.97615345,  3.73311376,  7.93133749,  5.46250672, 5.03175729,  4.2033281 ,  0.23471722,  3.13193818,  4.74024695, 3.63160728,  4.61824191,  3.49232399,  6.1516166 ,  5.94345566, 10.91569073,  1.71582105,  5.78847004,  6.85737497,  5.37536954, 4.60972807,  8.24144345,  6.87478599, 10.73155018,  9.92433724, 4.80577454,  8.29860233,  6.84510747,  5.85787661,  3.03570681]
const userTrace_1min = [3.72687272, 10.97615345,  3.73311376,  7.93133749,  5.46250672, 5.03175729,  4.2033281 ,  0.23471722,  3.13193818,  4.74024695, 3.63160728,  4.61824191,  3.49232399]
const videoTime = 15;

// User select default
var alg = algSelect.options[algSelect.selectedIndex].value
var testingTime = timeSelect.options[algSelect.selectedIndex].value
var traceFile = networkSelect.options[algSelect.selectedIndex].value
var total = userTrace_1min.reduce((a,b) => a+b ,0)
console.log(alg, testingTime, traceFile)

// Get data from dropdown
function getData(select){

   
    select.onchange = function(){
        var result = select.options[select.selectedIndex].value
        console.log(result)
        return result
    }
}
function calculateBufferedTime(){
    
}
function calculateWasteTime(var1){
    var time, traceFileChoose
    switch(var1){
        case '1min':
            time = userTrace_1min;
            break;
        case '3mins':
            time = userTrace_3min;
            break;
    }
    
    var wasteTime = time.length*15 - time.reduce((a,b)=> a+b,0)
    calculateButton.onclick = ()=>{
        $('.buffer').innerHTML = `Buffered time: <span>${wasteTime.toFixed(2)}s </span>`
    }
}
function calculate(callback) {
    callback();
}
function getAllData(){
    alg = getData(algSelect);
    testingTime = getData(timeSelect);
    traceFile = getData(networkSelect);
    console.log(alg, testingTime, traceFile)
}
getAllData()
// calculate(function(){
//     calculateBufferedTime();
//     calculateWasteTime();
// });