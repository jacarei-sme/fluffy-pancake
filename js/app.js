//SEÇÕES
const homeSection = document.getElementById('home-section');
const impressoraSection = document.getElementById('impressora-section');
const chamadoSection = document.getElementById('chamado-section');
const contatoSection = document.getElementById('contato-section');
const sobreSection = document.getElementById('sobre-section');
const carregamentoSection = document.getElementById('carregamento-section');

//NAVEGAÇÃO
function showSection(sectionToShow){
 homeSection.classList.add('hidden');
 impressoraSection.classList.add('hidden');
 chamadoSection.classList.add('hidden');
 contatoSection.classList.add('hidden');
 sobreSection.classList.add('hidden');
 carregamentoSection.classList.add('hidden');
 
 sectionToShow.classList.remove('hidden');
}

const btnHomeSection = document.getElementById('btn-home-section');
const btnChamadoSection = document.getElementById('btn-chamado-section');
const btnImpressoraSection = document.getElementById('btn-impressora-section');
const btnContatoSection = document.getElementById('btn-contato-section');
const btnSobreSection = document.getElementById('btn-sobre-section');

btnHomeSection.addEventListener('click', (e) =>{
    e.preventDefault();

    showSection(homeSection);
})

btnChamadoSection.addEventListener('click', (e) =>{
    e.preventDefault();

    showSection(chamadoSection);
})

btnImpressoraSection.addEventListener('click', (e) =>{
    e.preventDefault();

    showSection(impressoraSection);
})

btnContatoSection.addEventListener('click', (e) =>{
    e.preventDefault();

    showSection(contatoSection);
})

btnSobreSection.addEventListener('click', (e) =>{
    e.preventDefault();

    showSection(sobreSection);
})