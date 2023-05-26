import React from 'react';
import '../styles/globals.css';

const Home: React.FC = () => {
  const Contar = () => {
    const Ini = document.getElementById('txtano') as HTMLInputElement;
    const Fim = document.getElementById('txtfim') as HTMLInputElement;
    const Pass = document.getElementById('txtpasso') as HTMLInputElement;
    const Res = document.getElementById('res');

    if (Res !== null) {

    if (Ini.value.length === 0 || Fim.value.length === 0 || Pass.value.length === 0) {
      alert('Faltam dados');
    } else {
      Res.innerHTML = 'Contando: <br>';
      const i = Number(Ini.value);
      const f = Number(Fim.value);
      let p = Number(Pass.value);
      if (p <= 0) {
        alert('Passo inválido, considerando o valor do passo 1:');
        p = 1;
      }
      if (i < f) {
        // contagem crescente
        for (let c = i; c <= f; c += p) {
          Res.innerHTML += `${c}`;
        }
      } else {
        // contagem decrescente
        for (let c = i; c >= f; c -= p) {
          Res.innerHTML += `${c}`;
        }
      }
    }
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-3xl font-bold">
        <h1>Vamos Contar</h1>
      </header>
      <section className="mt-8">
        <div className="flex flex-col space-y-4">
          <p>
            Início:
            <input type="number" name="txtano" id="txtano" className="px-2 py-1 border" />
          </p>
          <p>
            Fim:
            <input type="number" name="txtfim" id="txtfim" className="px-2 py-1 border" />
          </p>
          <p>
            Passo:
            <input type="number" name="txtpasso" id="txtpasso" className="px-2 py-1 border" />
          </p>
          <p>
            <button className="px-4 py-2 text-white bg-blue-500 rounded" onClick={Contar}>
              Contar
            </button>
          </p>
        </div>
        <div id="res" className="mt-8">
          Preparando a contagem...
        </div>
      </section>
      <footer className="mt-8 text-gray-500">
        <p>&copy; Lets Count</p>
      </footer>
    </div>
  );
};

export default Home;
