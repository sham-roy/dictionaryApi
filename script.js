function search () {
    word0=word.value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word0}`)
    .then(data => data.json()).then(data=>display(data))
}
function display(meaning) {
    word1=meaning[0].word
    // partOfSpeach1=meaning[0].meanings[0].partOfSpeech
    defenition1=meaning[0].meanings[0].definitions[0].definition
    exampl=meaning[0].meanings[0].definitions[0].example

    result.innerHTML=`
    <div  class="w-4/5 p-5 rounded-lg text-justify mx-auto border border-amber-400 shadow shadow-lg shadow-slate-700 bg-stone-700">
        <p class="text-amber-400 underline uppercase text-center font-bold text-3xl mt-3">${word1}</p>
        <p class="text-center text-lg mt-1 text-yellow-200">${defenition1}</p> 
        <p class="text-amber-400  text-center  text-lg mt-5 font-bold text-xl">Example <span class="text-amber-400">!</span></p>  
        <p class="text-center text-lg mt-1 text-yellow-200">" ${exampl} "</p>           
    </div>

`
}