let EG_KFS = {
  country: 'EG',
  city: 'Kafr ash Shaykh',
};
let EG_DK = {
  country: 'EG',
  city: 'Ad Daqahlīyah',
};
let EG_BA = {
  country: 'EG',
  city: 'Al Baḩr al Aḩmar',
};
let EG_BH = {
  country: 'EG',
  city: 'Al Buḩayrah',
};
let EG_FYM = {
  country: 'EG',
  city: 'Al Fayyūm',
};
let EG_KN = {
  country: 'EG',
  city: 'Qinā',
};

let selection = document.getElementById('selection');
let city_name = document.getElementById('city-name');
let date = document.getElementById('date');

selection.addEventListener('change', () => {
  let city = selection.value;
  if (city == 'Kafr ash Shaykh') {
    city_name.innerHTML = city;

    axios
      .get('http://api.aladhan.com/v1/timingsByCity', {
        params: EG_KFS,
      })
      .then(function (response) {
        const timings = response.data.data.timings;
        FillTimeForPrayer('fajr-time', timings.Fajr);
        FillTimeForPrayer('Dhuhr-time', timings.Dhuhr);
        FillTimeForPrayer('Asr-time', timings.Asr);
        FillTimeForPrayer('Maghrib-time', timings.Maghrib);
        FillTimeForPrayer('Isha-time', timings.Isha);

        const weekDay = response.data.data.date.gregorian.weekday.en;
        const DayNum = response.data.data.date.gregorian.day;
        const month = response.data.data.date.gregorian.month.en;
        date.innerHTML = `${weekDay} ${DayNum} ${month}`;
        city_name.innerHTML = city;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (city == 'Ad Daqahlīyah') {
    city_name.innerHTML = city;

    axios
      .get('http://api.aladhan.com/v1/timingsByCity', {
        params: EG_DK,
      })
      .then(function (response) {
        const timings = response.data.data.timings;
        FillTimeForPrayer('fajr-time', timings.Fajr);
        FillTimeForPrayer('Dhuhr-time', timings.Dhuhr);
        FillTimeForPrayer('Asr-time', timings.Asr);
        FillTimeForPrayer('Maghrib-time', timings.Maghrib);
        FillTimeForPrayer('Isha-time', timings.Isha);

        const weekDay = response.data.data.date.gregorian.weekday.en;
        const DayNum = response.data.data.date.gregorian.day;
        const month = response.data.data.date.gregorian.month.en;
        date.innerHTML = `${weekDay} ${DayNum} ${month}`;
        city_name.innerHTML = city;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (city == 'Al Baḩr al Aḩmar') {
    city_name.innerHTML = city;

    axios
      .get('http://api.aladhan.com/v1/timingsByCity', {
        params: EG_BA,
      })
      .then(function (response) {
        const timings = response.data.data.timings;
        FillTimeForPrayer('fajr-time', timings.Fajr);
        FillTimeForPrayer('Dhuhr-time', timings.Dhuhr);
        FillTimeForPrayer('Asr-time', timings.Asr);
        FillTimeForPrayer('Maghrib-time', timings.Maghrib);
        FillTimeForPrayer('Isha-time', timings.Isha);

        const weekDay = response.data.data.date.gregorian.weekday.en;
        const DayNum = response.data.data.date.gregorian.day;
        const month = response.data.data.date.gregorian.month.en;
        date.innerHTML = `${weekDay} ${DayNum} ${month}`;
        city_name.innerHTML = city;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (city == 'Al Buḩayrah') {
    city_name.innerHTML = city;

    axios
      .get('http://api.aladhan.com/v1/timingsByCity', {
        params: EG_BH,
      })
      .then(function (response) {
        const timings = response.data.data.timings;
        FillTimeForPrayer('fajr-time', timings.Fajr);
        FillTimeForPrayer('Dhuhr-time', timings.Dhuhr);
        FillTimeForPrayer('Asr-time', timings.Asr);
        FillTimeForPrayer('Maghrib-time', timings.Maghrib);
        FillTimeForPrayer('Isha-time', timings.Isha);

        const weekDay = response.data.data.date.gregorian.weekday.en;
        const DayNum = response.data.data.date.gregorian.day;
        const month = response.data.data.date.gregorian.month.en;
        date.innerHTML = `${weekDay} ${DayNum} ${month}`;
        city_name.innerHTML = city;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (city == 'Al Fayyūm') {
    city_name.innerHTML = city;

    axios
      .get('http://api.aladhan.com/v1/timingsByCity', {
        params: EG_FYM,
      })
      .then(function (response) {
        const timings = response.data.data.timings;
        FillTimeForPrayer('fajr-time', timings.Fajr);
        FillTimeForPrayer('Dhuhr-time', timings.Dhuhr);
        FillTimeForPrayer('Asr-time', timings.Asr);
        FillTimeForPrayer('Maghrib-time', timings.Maghrib);
        FillTimeForPrayer('Isha-time', timings.Isha);

        const weekDay = response.data.data.date.gregorian.weekday.en;
        const DayNum = response.data.data.date.gregorian.day;
        const month = response.data.data.date.gregorian.month.en;
        date.innerHTML = `${weekDay} ${DayNum} ${month}`;
        city_name.innerHTML = city;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  if (city == 'Qinā') {
    city_name.innerHTML = city;

    axios
      .get('http://api.aladhan.com/v1/timingsByCity', {
        params: EG_KN,
      })
      .then(function (response) {
        const timings = response.data.data.timings;
        FillTimeForPrayer('fajr-time', timings.Fajr);
        FillTimeForPrayer('Dhuhr-time', timings.Dhuhr);
        FillTimeForPrayer('Asr-time', timings.Asr);
        FillTimeForPrayer('Maghrib-time', timings.Maghrib);
        FillTimeForPrayer('Isha-time', timings.Isha);

        const weekDay = response.data.data.date.gregorian.weekday.en;
        const DayNum = response.data.data.date.gregorian.day;
        const month = response.data.data.date.gregorian.month.en;
        date.innerHTML = `${weekDay} ${DayNum} ${month}`;
        city_name.innerHTML = city;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});

const FillTimeForPrayer = (id, time) => {
  document.getElementById(id).innerHTML = time;
};
