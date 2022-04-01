document.addEventListener("alpine:init", () => {
  Alpine.data("nav", () => ({
    navOpen: false,
    active: "home",
    searchBar: false,
  }));
  Alpine.data("hero", () => ({
    data: [
      {
        image: "https://res.cloudinary.com/dusqzrzpp/image/upload/c_scale,h_353/v1648596022/europe1_k69qda.jpg",
        bg: "https://res.cloudinary.com/dusqzrzpp/image/upload/c_scale,w_674/v1648596025/europe2_nxsns7.webp",
        title: "Amazing Destinations",
        rating: 5,
        desc: "We can help you see more of the world and help make your vacation dreams a reality. Whether you want to discover locales in the US, go to the Caribbean or even Antarctica, we can help with all that and everything in between!",
      },
      {
        image: "https://res.cloudinary.com/dusqzrzpp/image/upload/c_scale,g_south_west,w_551/v1648596570/photo-1510132310763-2df322eed83f_ffa7ol.jpg",
        bg: "https://res.cloudinary.com/dusqzrzpp/image/upload/c_scale,w_792/v1648596540/photo-1558923240-2672e219374b_b5ateo.jpg",
        title: "Cruises",
        rating: 5,
        desc: "Sail the seas and experience multiple destinations during one amazing journey. We book all the top lines including from family friendly, adult only, luxury lines and more",
      },
      {
        image: "https://res.cloudinary.com/dusqzrzpp/image/upload/c_scale,w_530/v1648597520/couple5_enrofc.jpg",
        bg: "https://res.cloudinary.com/dusqzrzpp/image/upload/c_scale,w_542/v1648597374/photo-1582719508461-905c673771fd_k5aqo2.jpg",
        title: "All Inclusive",
        rating: 5,
        desc: "Check-in to your resort and enjoy all-inclusive amenities during your trip! Food, beverages, activities and more all included for one price. With thousands available around the world, there’s sure to be a perfect fit for you",
      },
      {
        image: "https://res.cloudinary.com/dusqzrzpp/image/upload/c_scale,w_493/v1648597715/photo-1605443790760-18c6121939d3_e3mill.jpg",
        bg: "https://res.cloudinary.com/dusqzrzpp/image/upload/c_scale,w_504/v1648597818/themepark2_karomc.jpg",
        title: "Theme Parks",
        rating: 5,
        desc: "Whether you are visiting Orlando, California or Texas, we can help you plan an adventurous theme park getaway to some of the top attractions around including Disney Parks, Universal Parks and SeaWorld Parks",
      },
      {
        image: "https://res.cloudinary.com/dusqzrzpp/image/upload/c_scale,w_345/v1648597828/photo-1607748862156-7c548e7e98f4_kd3pfh.webp",
        bg: "https://res.cloudinary.com/dusqzrzpp/image/upload/c_scale,w_685/v1648787167/duy-pham-Cecb0_8Hx-o-unsplash_f5ai9r.webp",
        title: "Groups",
        rating: 5,
        desc: "Life is just more fun with others! We can take the hard work away by planning your family reunion, class reunion, friends trip, birthday celebration, business trip, destination wedding and so much more",
      },
    ],
    text_swiper: null,
    swiper: null,
    cIndex: 0,
    init() {
      this.text_swiper = new Swiper(this.$refs.text_swiper, {
        direction: "vertical",
        loop: true,
        spaceBetween: 10,
        allowTouchMove: false,
      });
      this.swiper = new Swiper(this.$refs.swiper, {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        breakpoints: {
          350: {
            slidesPerView: 1.4,
          },
          550: {
            slidesPerView: 2,
          },
          650: {
            slidesPerView: 1.5,
          },
          850: {
            slidesPerView: 1.8,
          },
          1000: {
            slidesPerView: 2.1,
          },
          1200: {
            slidesPerView: 2.5,
          },
        },
      });
      this.swiper.on("slideChange", () => {
        this.sliding();
      });
    },
    sliding() {
      this.cIndex = this.swiper.realIndex;
      this.text_swiper.slideToLoop(this.swiper.realIndex, 500);
    },
    nextSlide() {
      this.swiper.slideNext(500);
      this.sliding();
    },
    prevSlide() {
      this.swiper.slidePrev(500);
      this.sliding();
    },
  }));
  Alpine.data("dropdown", () => ({
    open: false,
  }));
  Alpine.data("journey", () => ({
    cities: [
      { name: "Bali", add: "DPS, Ngurah Rai International Airport" },
      { name: "Paris", add: "CDG, Paris Charles de Gaulle Airport" },
      { name: "Thailand", add: "BKK, Suvarnabhumi Airport" },
      { name: "Indonesia", add: "KNO, Kualanamu International Airport" },
      { name: "Kerala", add: "COK, Cochin International Airport" },
    ],
    from: { name: "Kerala", add: "COK, Cochin International Airport" },
    to: { name: "Thailand", add: "BKK, Suvarnabhumi Airport" },
    way: false,
    dep: null,
    ret: null,
  }));
  Alpine.data("datepicker", () => ({
    MONTH_NAMES: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    MONTH_SHORT_NAMES: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    DAYS: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    FULL_DAYS: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    showDatepicker: false,
    datepickerValue: "",
    selectedDate: "2021-02-04",
    dateFormat: "DD-MM-YYYY",
    day: "",
    month: "",
    year: "",
    no_of_days: [],
    blankdays: [],
    initDate() {
      let today;
      today = new Date();
      this.month = today.getMonth();
      this.year = today.getFullYear();
      this.day = this.FULL_DAYS[today.getDay()];
      this.datepickerValue = this.formatDateForDisplay(today);
    },
    formatDateForDisplay(date) {
      let formattedDay = this.DAYS[date.getDay()];
      let formattedDate = ("0" + date.getDate()).slice(-2); // appends 0 (zero) in single digit date
      let formattedMonth = this.MONTH_NAMES[date.getMonth()];
      let formattedMonthShortName = this.MONTH_SHORT_NAMES[date.getMonth()];
      let formattedMonthInNumber = (
        "0" +
        (parseInt(date.getMonth()) + 1)
      ).slice(-2);
      let formattedYear = ("" + date.getFullYear()).slice(2);
      if (this.dateFormat === "DD-MM-YYYY") {
        return `${formattedDate} ${formattedMonthShortName}'${formattedYear}`; // 02 Jan'22
      }
      if (this.dateFormat === "YYYY-MM-DD") {
        return `${formattedYear}-${formattedMonthInNumber}-${formattedDate}`; // 2021-04-02
      }
      if (this.dateFormat === "D d M, Y") {
        return `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}`; // Tue 02 Mar 2021
      }
      return `${formattedDay} ${formattedDate} ${formattedMonth} ${formattedYear}`;
    },
    isSelectedDate(date) {
      const d = new Date(this.year, this.month, date);
      return this.datepickerValue === this.formatDateForDisplay(d)
        ? true
        : false;
    },
    isToday(date) {
      const today = new Date();
      const d = new Date(this.year, this.month, date);
      return today.toDateString() === d.toDateString() ? true : false;
    },
    getDateValue(date) {
      let selectedDate = new Date(this.year, this.month, date);
      this.datepickerValue = this.formatDateForDisplay(selectedDate);
      // this.$refs.date.value = selectedDate.getFullYear() + "-" + ('0' + formattedMonthInNumber).slice(-2) + "-" + ('0' + selectedDate.getDate()).slice(-2);
      this.isSelectedDate(date);
      this.day = this.FULL_DAYS[selectedDate.getDay()];
      this.showDatepicker = false;
    },
    getNoOfDays() {
      let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
      // find where to start calendar day of week
      let dayOfWeek = new Date(this.year, this.month).getDay();
      let blankdaysArray = [];
      for (var i = 1; i <= dayOfWeek; i++) {
        blankdaysArray.push(i);
      }
      let daysArray = [];
      for (var i = 1; i <= daysInMonth; i++) {
        daysArray.push(i);
      }
      this.blankdays = blankdaysArray;
      this.no_of_days = daysArray;
    },
  }));
});
