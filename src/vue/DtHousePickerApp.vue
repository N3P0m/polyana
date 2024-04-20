<template>
  <div>
    <div class="common-heading wrapper-inner-sm">
      <button class="btn btn--primary-back common-heading__right"><span>Назад</span></button>
      <h2 class="h5 common-heading__middle">Выберите дом</h2>
      <div class="switcher switcher--position"  v-if="width > 768">
        <div class="switcher-container">
          <div class="tabs">
            <input type="radio" id="radio-1" name="tabs" value="plan" v-model="viewSwitcher"/>
            <label class="tab swiper-preview-control" for="radio-1" data-slide="0">Генплан</label>
            <input type="radio" id="radio-2" name="tabs" value="filters" v-model="viewSwitcher"/>
            <label class="tab swiper-preview-control" for="radio-2" data-slide="1">Параметры</label>
            <span class="glider"></span>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="viewSwitcher === 'filters'" class="wrapper-inner-xl">
        <div class="dt-house-picker">
          <DtHousePickerFilter  :key="instance" v-if="width > 575" v-model:max-sq="filterMaxSq"
                               :limit-sq-max="minMaxHousesValues.maxSq"
                               :limit-sq-min="minMaxHousesValues.minSq"
                               v-model:min-sq="filterMinSq"
                               v-model:current-floor-value="filterFloor"
                               v-model:tags="filterTags"
          />
          <div>
            <button v-if="width <= 575" class="btn btn--primary dt-house-picker__filters-btn"
                    @click="openFiltersPopup"
                    ref="filtersFullBtn"
            >
              <div class="text-with-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                  <path d="M7 4H17" stroke="#2E3F4F"/>
                  <path d="M11 11L1 11" stroke="#2E3F4F"/>
                  <circle cx="4" cy="4" r="3" stroke="#2E3F4F"/>
                  <circle cx="14" cy="11" r="3" transform="rotate(-180 14 11)" stroke="#2E3F4F"/>
                </svg>
                <span>Фильтры</span>
              </div>
            </button>
          </div>
        </div>
        <div class="dt-house-picker__result">
          <div class="dt-house-picker__result-header">
          <span class="dt-house-picker__info">Найдено: {{pluralizeHouse(filteredHouseDataBySq.length)}}</span>
            <button class="btn btn--tertiary" @click="resetFilters">
              <span>Сбросить фильтр</span>
              <div style="margin-left: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <mask id="mask0_1480_116" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="10" height="10">
                    <rect width="10" height="10" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_1480_116)">
                    <path d="M0.00012207 0L10 10" stroke="black"/>
                    <path d="M10 0L8.12008e-05 10" stroke="black"/>
                  </g>
                </svg>
              </div>
            </button>
          </div>
          <ul class="dt-house-picker__list" v-auto-animate>
            <template v-for="house in viewedData" :key="house.id">
              <DtHouseItem tag="li" :house="house"/>
            </template>
          </ul>
          <transition name="fade">
          <div class="text-center view-more" @click="viewMore" v-if="filteredHouseDataBySq.length > elementsPerView">
            <button class="btn btn--primary">Загрузить еще</button>
          </div>
          </transition>
        </div>
        <PopupFull v-if="width <= 575" v-model="isFiltersPopupShow">
          <template #header>
            <div class="text-with-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                <path d="M7 4H17" stroke="#2E3F4F"/>
                <path d="M11 11L1 11" stroke="#2E3F4F"/>
                <circle cx="4" cy="4" r="3" stroke="#2E3F4F"/>
                <circle cx="14" cy="11" r="3" transform="rotate(-180 14 11)" stroke="#2E3F4F"/>
              </svg>
              <span>Фильтры</span>
            </div>
          </template>
          <DtHousePickerFilter :key="instance" v-model:max-sq="filterMaxSq"
                               :limit-sq-max="minMaxHousesValues.maxSq"
                               :limit-sq-min="minMaxHousesValues.minSq"
                               v-model:min-sq="filterMinSq"
                               v-model:current-floor-value="filterFloor"
                               v-model:tags="filterTags"
          />
          <template #footer="{ methods }">
            <button class="btn btn--primary"  @click="methods">
              Применить
            </button>
          </template>
        </PopupFull>
        <transition name="slide" appear>
          <button class="btn btn--primary btn--fixed" @click="openFiltersPopup" ref="el" v-if="!filtersFullBtnIsVisible && !isFiltersPopupShow">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
              <path d="M7 4H17" stroke="#2E3F4F"/>
              <path d="M11 11L1 11" stroke="#2E3F4F"/>
              <circle cx="4" cy="4" r="3" stroke="#2E3F4F"/>
              <circle cx="14" cy="11" r="3" transform="rotate(-180 14 11)" stroke="#2E3F4F"/>
            </svg>
          </button>
        </transition>
      </div>
      <div v-else class="wrapper-full-width" style=" margin-top: -100px;">
        <div class="genplan" style="padding-top: 100px;">
          <img class="genplan__img" src="@/assets/img/components/houses/genpaln-house.webp">
          <svg ref="genplan" class="genplan__mask" viewBox="0 0 1922 960" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="genplan__house-mask" data-house-mask="26" fill-rule="evenodd" clip-rule="evenodd" d="M1922 0H2V960H1922V0ZM1290 474L1317 487.5L1386 525V515.5L1418 503C1419.83 461.512 1364.28 361.911 1314 342L1174 421V428.5C1212.16 440.812 1234.78 450.473 1265.24 463.485C1272.88 466.748 1281.01 470.221 1290 474Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="24" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM1171.5 428V419.5L1312.5 343.5C1276.01 318.71 1247.32 308.223 1195 290L1053 376.5V384C1100.73 399.399 1126.64 409.152 1171.5 428Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="22" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM1054 384V375.5L1198.5 290.5L1047.5 251L921.5 338V345.5L1054 384Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="20" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM922 346V337.5L1047.5 250L912 221.5L799.5 310.5V318L922 346Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="18" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM799.5 318.5V310L913 221L773 197L673 287.5V295L799.5 318.5Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="16" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM674.5 295V286.5L773 196.5L624 176.5L545 271V278.5L674.5 295Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="15" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM1313.5 477.501C1310.58 476.542 1198.58 526.874 1140 556.5V566.5C1167.86 578.11 1200.15 599.271 1220.91 612.872C1231.44 619.773 1239 624.727 1241.5 625.5L1242.5 587.5L1254 583L1310 560.5L1325.5 577.5L1398 549.5V526L1410.5 521L1434.5 510.5L1419.5 502.5L1386.5 515L1313.5 477.501Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="13" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM1084.41 465.71C1061.7 478.166 1038.51 490.883 1019.5 501V511C1044.45 521.395 1079.65 538.391 1105.68 550.959C1123.47 559.548 1136.98 566.069 1140 567V555.5C1173.84 537.435 1207.68 523.254 1238.23 510.453C1267.71 498.1 1294.12 487.032 1314.5 475C1259.9 453.383 1209.5 431 1178 417C1175.38 415.834 1130.89 440.228 1084.41 465.71Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="11" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM1090.71 388.497C1054.69 374.231 1024.56 362.3 1023 367C1021.65 371.047 1000.86 383.823 974.025 400.307C947.601 416.54 915.322 436.369 890 455V464C916.615 471.428 955.977 486.914 984.417 498.104C1001.93 504.993 1015.29 510.253 1019 511V500.5C1053.82 476.675 1089.04 460.73 1120.62 446.431C1140.73 437.323 1159.38 428.884 1175.5 419.501C1150.92 412.339 1119 399.698 1090.71 388.497Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="9" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM943.967 343.469C908.687 332.867 879.32 324.041 877 327.001C875.223 329.269 862.353 338.016 844.334 350.264C818.032 368.142 780.759 393.477 751 417V425C782.504 430.962 832.416 446.526 863.198 456.125C876.709 460.338 886.534 463.402 889.5 464V453.5C923.3 429.308 954.517 411.555 983.72 394.949C999.899 385.748 1015.46 376.899 1030.5 367.501C1005.34 361.915 972.695 352.103 943.967 343.469Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="7" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM864.696 324.422C808.747 310.943 721.65 289.96 715.993 296C713.081 299.11 702.672 307.45 688.329 318.942C666.348 336.554 635.128 361.569 607.5 386.5V394.5C653.387 401.608 742.75 422.784 752 426V415.5C766.449 405.158 779.253 395.842 791.101 387.221C822.325 364.501 846.914 346.61 877.493 327.501C873.466 326.534 869.182 325.502 864.696 324.422Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="5" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM723.5 296C669.242 282.98 546.199 267.959 538.5 272.5C533.985 275.163 524.747 285.837 511.604 301.023C497.221 317.641 478.163 339.662 455.5 362.5V370C457.677 370.338 459.965 370.692 462.351 371.061C510.242 378.476 597.189 391.937 606 395V385C621.451 372.842 634.342 362.08 646.079 352.282C672.411 330.3 692.931 313.169 723.5 296Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="14" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM882 668.5V658.5L984.5 609L986 601.5L998.5 598L1012 587.5L1030.5 591L1067.5 573L1157 622.5L1128 632.5L1116 637V660.5L1030.5 693.5L1021.5 674.5L961.5 698.5L949.5 701.5V708.5L882 668.5Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="12" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM994.073 539.371C959.588 522.977 929.513 508.68 927.5 511C928.684 511.995 910.053 521.686 883.968 535.256C845.88 555.071 791.898 583.153 760.5 604.5V615C784.395 622.306 813.854 637.397 837.909 649.72C859.971 661.021 877.489 669.995 882 668.5V658.5L984.5 609L986 601.5L998.5 598L1012 587.5L1030.5 591L1067.5 573C1046.82 564.447 1019.27 551.35 994.073 539.371Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="10" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM854.853 486.178C813.921 472.446 775.982 459.718 771 463.342C769.266 464.603 764.829 467.328 758.487 471.223C732.358 487.269 673.901 523.17 639 558.342V569.5C665.869 575.481 699.602 589.443 724.734 599.845C742.229 607.086 755.556 612.602 759.5 612.5V602.5L926.5 509C906.077 503.363 879.904 494.582 854.853 486.178Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="8" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM773 462.307C719.208 447.459 608.615 418.564 607.5 424.307C607.306 425.306 600.74 430.08 590.555 437.485C564.834 456.187 516.034 491.67 488.5 525.5V534C532.167 540 619.3 563.8 630.5 567V555.5L773 462.307Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="6" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM609.5 423C550.333 412.833 430.9 393 426.5 395C421 397.5 362 453.5 330 498.5V508.5C373.667 514.5 463.8 527.3 475 530.5L609.5 423Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="4" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM862.45 652.485C866.982 654.853 873.03 658.012 882.5 662C896.36 667.836 912.083 676.812 925.632 684.547C938.58 691.939 949.543 698.197 955 699.5L949.5 703V727.5L901 747L888 726.5L814 756.5L815 781.5L766.5 799V812C745.643 802.742 731.465 791.974 717.016 781C700.494 768.453 683.619 755.636 656 744.5V731.5C656 731.5 819.5 649.5 838 647.5C850.353 646.165 853.343 647.727 862.45 652.485Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="3" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM742.664 597.973C751.36 601.128 760.127 604.309 768.5 607C784.387 612.107 801.508 620.701 815.388 627.668C825.971 632.98 834.669 637.346 839.5 638.5L655.5 732V742C606.416 718.219 578.284 706.723 527 689.5V676.5C527 676.5 665.5 585 684 583C697.405 581.551 719.787 589.672 742.664 597.973Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="2" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM563.474 541.476C578.055 546.001 593.995 550.948 608 554C628.072 558.375 649.359 566.157 664.963 571.862C673.613 575.025 680.517 577.549 684.5 578.5L526 676.5V685C523.959 684.44 521.619 683.805 518.951 683.082C508.112 680.141 491.882 675.737 468.5 669C458.385 666.085 448.269 662.7 438.194 659.329C418.887 652.868 399.727 646.457 381 643.5V633.5C381 633.5 508 531 522 531C529.716 531 545.571 535.92 563.474 541.476Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house-mask" data-house-mask="1" fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V960H1920V0ZM333.5 499C357.833 501.5 414.3 510.2 445.5 517C463.64 520.954 481.251 523.972 495.011 526.33C504.916 528.028 512.826 529.384 517.5 530.5C480.182 553.85 455.608 573.801 426.878 597.126C413.019 608.379 398.192 620.416 380.5 634V642.5C370.167 639.667 342 632.9 312 628.5C282 624.1 258.5 620.5 230 616V608.5L333.5 499Z" fill="#222222" fill-opacity="0.5"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 26)" @click="goToHome(26)" data-house="26" d="M1317 487.5L1290 474C1245.14 455.152 1221.73 443.899 1174 428.5V421L1314 342C1364.28 361.911 1419.83 461.512 1418 503L1386 515.5V525L1317 487.5Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 24)" @click="goToHome(24)" data-house="24" d="M1171.5 419.5V428C1126.64 409.152 1100.73 399.399 1053 384V376.5L1195 290C1247.32 308.223 1276.01 318.71 1312.5 343.5L1171.5 419.5Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 22)" @click="goToHome(22)" data-house="22" d="M1054 375.5V384L921.5 345.5V338L1047.5 251L1198.5 290.5L1054 375.5Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 20)" @click="goToHome(20)" data-house="20" d="M922 337.5V346L799.5 318V310.5L912 221.5L1047.5 250L922 337.5Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 18)" @click="goToHome(18)" data-house="18" d="M799.5 310V318.5L673 295V287.5L773 197L913 221L799.5 310Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 16)" @click="goToHome(16)" data-house="16" d="M674.5 286.5V295L545 278.5V271L624 176.5L773 196.5L674.5 286.5Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 15)" @click="goToHome(15)" data-house="15" d="M1140 556.501C1198.58 526.875 1310.58 476.542 1313.5 477.501L1386.5 515L1419.5 502.5L1434.5 510.5L1410.5 521L1398 526V549.5L1325.5 577.5L1310 560.5L1254 583L1242.5 587.5L1241.5 625.5C1234.06 623.206 1182 584.001 1140 566.501V556.501Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 13)" @click="goToHome(13)" data-house="13" d="M1019.5 501C1077.39 470.185 1174.09 415.264 1178 417C1209.5 431 1259.9 453.383 1314.5 475C1273 499.5 1206.5 520 1140 555.5V567C1132.56 564.706 1061.5 528.5 1019.5 511V501Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 11)" @click="goToHome(11)" data-house="11" d="M1023 367C1025.79 358.61 1119.61 403.219 1175.5 419.5C1134.06 443.616 1076 461.5 1019 500.5V511C1009.28 509.038 933 476 890 464V455C941.036 417.449 1020.33 375.032 1023 367Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 9)" @click="goToHome(9)" data-house="9" d="M877 327.001C881.209 321.63 974.447 355.055 1030.5 367.501C988.317 393.861 942.027 415.904 889.5 453.5V464C879.776 462.038 796.331 433.578 751 425V417C801.146 377.362 872.628 332.579 877 327.001Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 7)" @click="goToHome(7)" data-house="7" d="M715.993 296C722.103 289.476 823.235 314.481 877.493 327.501C835.31 353.861 804.527 377.904 752 415.5V426C742.75 422.785 653.387 401.609 607.5 394.5V386.5C653.154 345.303 708.618 303.876 715.993 296Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 5)" @click="goToHome(5)" data-house="5" d="M538.5 272.5C546.199 267.959 669.242 282.98 723.5 296C679.306 320.822 656.113 345.564 606 385V395C596.75 391.785 501.387 377.109 455.5 370V362.5C498.872 318.791 529.045 278.077 538.5 272.5Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 14)" @click="goToHome(14)" data-house="14" d="M882 658.5V668.5L949.5 708.5V701.5L961.5 698.5L1021.5 674.5L1030.5 693.5L1116 660.5V637L1128 632.5L1157 622.5L1067.5 573L1030.5 591L1012 587.5L998.5 598L986 601.5L984.5 609L882 658.5Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 12)" @click="goToHome(12)" data-house="12" d="M927.5 511C930.983 506.984 1018.52 552.742 1067.5 572.999L1030.5 591L1012 587.5L998.5 598L986 601.5L984.5 609L882 658.5V668.5C872.569 671.625 806.309 629.007 760.5 615V604.5C813.402 568.534 930.412 513.446 927.5 511Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 10)" @click="goToHome(10)" data-house="10" d="M771 463.342C779.031 457.5 872.708 494.151 926.5 509L759.5 602.5V612.5C749.891 612.747 684.572 579.644 639 569.5V558.342C682.372 514.633 762.123 469.799 771 463.342Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 8)" @click="goToHome(8)" data-house="8" d="M607.5 424.307C608.615 418.564 719.208 447.459 773 462.307L630.5 555.5V567C619.3 563.8 532.167 540 488.5 534V525.5C526.937 478.274 606.817 427.827 607.5 424.307Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 6)" @click="goToHome(6)" data-house="6" d="M426.5 395C430.9 393 550.333 412.833 609.5 423L475 530.5C463.8 527.3 373.667 514.5 330 508.5V498.5C362 453.5 421 397.5 426.5 395Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 4)" @click="goToHome(4)" data-house="4" d="M882.5 662C854 649.999 856.5 645.5 838 647.5C819.5 649.5 656 731.5 656 731.5V744.5C707.773 765.375 721.794 792.155 766.5 812V799L815 781.5L814 756.5L888 726.5L901 747L949.5 727.5V703L955 699.5C943.833 696.833 909.606 673.414 882.5 662Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 3)" @click="goToHome(3)" data-house="3" d="M768.5 607C738.099 597.228 702.5 581 684 583C665.5 585 527 676.5 527 676.5V689.5C578.284 706.722 606.416 718.218 655.5 742V732L839.5 638.5C828.333 635.833 796.5 616 768.5 607Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 2)" @click="goToHome(2)" data-house="2" d="M608 554C576.8 547.2 536 531 522 531C508 531 381 633.5 381 633.5V643.5C409.5 648 439 660.5 468.5 669C497.636 677.395 515.667 682.167 526 685V676.5L684.5 578.5C673.333 575.833 639.2 560.8 608 554Z" fill="#D9D9D9"/>
            <path class="genplan__house" v-element-hover="(e) => onHoveredMask(e, 1)" @click="goToHome(1)" data-house="1" d="M445.5 517C414.3 510.2 357.833 501.5 333.5 499L230 608.5V616C258.5 620.5 282 624.1 312 628.5C342 632.9 370.167 639.667 380.5 642.5V634C434.865 592.259 462.179 565.115 517.5 530.5C506.333 527.833 476.7 523.8 445.5 517Z" fill="#D9D9D9"/>
          </svg>
          <div class="genplan__doodle doodle">
            <span>Дом</span>
            <span class="doodle__heading">
              {{ activeHouse.house_name_tr }}
            </span>
            <span>{{ activeHouse.sq }} м²</span>
            <span>{{activeHouse.sq_land}} сот.</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";

import {useSwipe, useWindowSize, useElementVisibility} from '@vueuse/core'
import PopupFull from "@/vue/components/PopupFull.vue";
import DtHousePickerFilter from "@/vue/components/DtHousePickerFilter.vue";
import DtHouseItem from "@/vue/components/DtHouseItem.vue";

// import {crmData} from "@/vue/test-data/houses-data";

import { vElementHover } from '@vueuse/components'
// import ApartmentsPickerFilter from "@/vue/components/apartments/ApartmentsPickerFilter.vue";

// window.crmData = crmData

const el = ref(null);
const filtersFullBtn = ref(null)

const filtersFullBtnIsVisible = useElementVisibility(filtersFullBtn)

// genplan
const genplan = ref(null)
const activeHouse = ref({})
const viewSwitcher = ref('genplan')

function onHoveredMask(state, elNumber) {
  if (!housesData.value.find(house => +house.number === +elNumber)) return
  const houseActiveClass = 'genplan__house-mask--active'
  const doodleActiveClass = 'genplan__doodle--active'
  const mask = genplan.value.querySelector(`[data-house-mask="${elNumber}"]`)
  const house = genplan.value.querySelector(`[data-house="${elNumber}"]`)
  const doodle = document.querySelector(`.genplan__doodle`)
  const genplanWrapper = document.querySelector('.genplan')
  state ?
      mask.classList.add(houseActiveClass) :
      mask.classList.remove(houseActiveClass)
  state ?
      doodle.classList.add(doodleActiveClass) :
      doodle.classList.remove(doodleActiveClass)
  const {width: widthHouse, x, y} = house.getBoundingClientRect()
  const {x: xGenplan, y: yGenplan} = genplanWrapper.getBoundingClientRect()

  setActiveHouseFromNumber(elNumber)
  doodle.style.top = y - yGenplan - doodle.getBoundingClientRect().height + "px"
  doodle.style.left = x - xGenplan + (widthHouse / 2) - (doodle.getBoundingClientRect().width / 2) + "px"
  // console.log('hov', house.getBoundingClientRect())
}

// /genplan


function goToHome(homeNumber) {
  if (!housesData.value.find(house => +house.number === homeNumber)) return
  window.location = window.location.origin + '/house/?district=' + homeNumber
}
const {isSwiping, direction} = useSwipe(el, {
  onSwipe(e) {
    openFiltersPopup()
  },
  onSwipeEnd() {
    openFiltersPopup()
  }
})

const isFiltersPopupShow = ref(false)

function openFiltersPopup() {
  isFiltersPopupShow.value = true
}

const housesData = computed(() => {
  return window.crmData
})

// const maxCost = computed(() => housesData.value.reduce((max, current) => current.cost > max ? current.cost : max, housesData.value[0].cost))
// const minCost = computed(() => housesData.value.reduce((min, current) => current.cost < min ? current.cost : min, housesData.value[0].cost))
const minMaxHousesValues = computed(() => {
  const result = housesData.value.reduce((houseResult, houseSource) => {
    // houseResult.minFloor = Math.min(houseResult.minFloor, houseSource.floor);
    // houseResult.maxFloor = Math.max(houseResult.maxFloor, houseSource.floor);
    houseResult.minSq = Math.min(houseResult.minSq, houseSource.sq);
    houseResult.maxSq = Math.max(houseResult.maxSq, houseSource.sq);
    houseResult.minCost = Math.min(houseResult.minCost, houseSource.cost);
    houseResult.maxCost = Math.max(houseResult.maxCost, houseSource.cost);


    return houseResult
  }, {
    // maxFloor: this.apartmentsList[0].floor,
    // minFloor: this.apartmentsList[0].floor,
    minSq: housesData.value[0].sq,
    maxSq: housesData.value[0].sq,
    minCost: housesData.value[0].cost,
    maxCost: housesData.value[0].cost
  })

  result.minCost = Math.floor(result.minCost / 1000000)
  result.maxCost = Math.ceil(result.maxCost / 1000000)
  result.minSq = Math.floor(result.minSq)
  result.maxSq = Math.ceil(result.maxSq)

  return result
})


const filterMaxSq = ref(minMaxHousesValues.value.maxSq)
const filterMinSq = ref((minMaxHousesValues.value.minSq))
const filterFloor = ref(null)
const filterTags = ref([])
const elementsPerView = ref(8);
const instance = ref(1)

function viewMore() {
  elementsPerView.value += 8
}


function pluralizeHouse(num) {
  const lastNum = num % 10
  if (lastNum === 1) {
    return num + ' дом';
  } else if (lastNum > 1 && lastNum < 5) {
    return num + ' дома';
  } else {
    return num + ' домов';
  }
}

function resetFilters() {
  filterMaxSq.value = minMaxHousesValues.value.maxSq
  filterMinSq.value = minMaxHousesValues.value.minSq
  filterFloor.value = null
  filterTags.value = []
  instance.value++
}

function setActiveHouseFromNumber(numberHouse) {
  activeHouse.value = housesData.value.find(house => Number(house.number) === numberHouse)
  // console.log(activeHouse.value)
}


const filteredHouseDataBySq = computed(() => {
  return housesData.value.filter(house => {
    return (house.sq <= filterMaxSq.value && house.sq >= filterMinSq.value)
        && (filterFloor.value === null || house.floors === filterFloor.value)
        && (filterTags.value.length === 0 || filterTags.value.every(filterTag => {
          return house.tags.includes(filterTag.value);
        }));
  })
})

watch(() => filteredHouseDataBySq.value.length, (newData) => {
  elementsPerView.value = 8
}, { deep: true})

const viewedData = computed(() => {
  return filteredHouseDataBySq.value.slice(0, elementsPerView.value)
})


// var максимальное_значение = массив_объектов.reduce(function (максимум, текущий_элемент) {
// return (текущий_элемент.ключ > максимум) ? текущий_элемент.ключ : максимум;
// }, массив_объектов[0].ключ);


const {width, height} = useWindowSize()

function checkWidth () {
  // console.log(width.value)
  if (width.value <= 768) {
    viewSwitcher.value = 'filters'
  }
}

checkWidth()
watch(width, (newWidth) => {
  checkWidth()
})
</script>
