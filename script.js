async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=2e74da73-7b08-43cd-8d5a-8560bcc022e6&offset=0"
  )
    .then((data) => data.json())
    .then((respo) => {

        // console.log(respo);
      if (respo.status != "success") return;

      const matchesList = respo.data;

      console.log(matchesList);
      if (!matchesList) return [];

      const getData = matchesList.map(
        (match) => `${match.name} , ${match.status}`
      );

      console.log(getData);

    document.getElementById('matches').innerHTML = getData.map(match => `<li>${match}</li>`).join('');

    return getData;
    });
    

}



getMatchData();


// .filter(match => match.series_id == '423e93da-fd50-4fae-a74e-5e6f8fb7ff3b')
