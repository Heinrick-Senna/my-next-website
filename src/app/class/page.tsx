export default function className() {
    return (
        <>
            <section className="overflow-y-auto max-h-[80vh] p-6 bg-class-100 text-white-800 border-solid border-white border-2 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-blue-600">Passo a Passo: Instalar MySQL usando Docker no Windows</h1>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">1. Verificar se o Docker está instalado</h2>
                <p className="mb-4">Peça para o aluno abrir o PowerShell (botão direito no menu Iniciar {'>'} Windows PowerShell).</p>
                <p className="mb-4">Digite o comando abaixo para verificar se o Docker já está instalado:</p>
                <pre className="bg-gray-200 text-black p-4 rounded-md mb-4"><code>docker --version</code></pre>
                <p className="mb-4">Se aparecer uma mensagem de erro, significa que o Docker não está instalado. Vamos instalá-lo no próximo passo.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">2. Instalar o Docker Desktop</h2>
                <p className="mb-4">Acesse o site oficial do Docker: <a href="https://www.docker.com/products/docker-desktop" target="_blank" className="text-blue-500 hover:underline">https://www.docker.com/products/docker-desktop</a>.</p>
                <p className="mb-4">Faça o download do Docker Desktop para Windows.</p>
                <p className="mb-4">Execute o instalador e siga as instruções na tela.</p>
                <p className="mb-4">Após a instalação, reinicie o computador.</p>
                <p className="mb-4">Abra o Docker Desktop e aguarde ele inicializar (você verá o ícone do Docker na bandeja do sistema).</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">3. Verificar se o Docker está funcionando</h2>
                <p className="mb-4">Feche e Abra o PowerShell novamente.</p>
                <p className="mb-4">Digite o comando:</p>
                <pre className="bg-gray-200 text-black p-4 rounded-md mb-4"><code>docker --version</code></pre>
                <p className="mb-4">Se aparecer a versão do Docker, está tudo certo!</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">4. Baixar a imagem do MySQL</h2>
                <p className="mb-4">No PowerShell, digite o comando abaixo para baixar a imagem oficial do MySQL:</p>
                <pre className="bg-gray-200 text-black p-4 rounded-md mb-4"><code>docker pull mysql:latest</code></pre>
                <p className="mb-4">Isso vai baixar a versão mais recente do MySQL.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">5. Criar e executar um contêiner MySQL</h2>
                <p className="mb-4">Agora, vamos criar um contêiner MySQL. Digite o comando abaixo no PowerShell:</p>
                <pre className="bg-gray-200 text-black p-4 rounded-md mb-4"><code>docker run --name meu-mysql -e MYSQL_ROOT_PASSWORD=senha123 -d -p 3306:3306 mysql:latest</code></pre>
                <p className="mb-4">Explicação do comando:</p>
                <ul className="list-disc pl-8 mb-4">
                    <li><code>--name meu-mysql</code>: Nome do contêiner (pode ser qualquer nome).</li>
                    <li><code>-e MYSQL_ROOT_PASSWORD=senha123</code>: Define a senha do usuário root do MySQL (substitua "senha123" por uma senha segura).</li>
                    <li><code>-d</code>: Executa o contêiner em segundo plano (modo "detached").</li>
                    <li><code>-p 3306:3306</code>: Mapeia a porta 3306 do contêiner para a porta 3306 do seu computador.</li>
                    <li><code>mysql:latest</code>: Imagem do MySQL que baixamos.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">6. Verificar se o MySQL está rodando</h2>
                <p className="mb-4">Para verificar se o contêiner está em execução, digite:</p>
                <pre className="bg-gray-200 text-black p-4 rounded-md mb-4"><code>docker ps</code></pre>
                <p className="mb-4">Se aparecer o contêiner <code>meu-mysql</code> na lista, significa que o MySQL está funcionando.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">7. Conectar ao MySQL</h2>
                <p className="mb-4">Para acessar o MySQL dentro do contêiner, use o comando:</p>
                <pre className="bg-gray-200 text-black p-4 rounded-md mb-4"><code>docker exec -it meu-mysql mysql -u root -p</code></pre>
                <p className="mb-4">Quando solicitado, insira a senha que você definiu (<code>senha123</code> no exemplo).</p>
                <p className="mb-4">Pronto! Agora o aluno está conectado ao MySQL e pode começar a usar o banco de dados.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">8. Comandos básicos para testar</h2>
                <p className="mb-4">Dentro do MySQL, o aluno pode testar alguns comandos:</p>
                <p className="mb-4">Mostrar bancos de dados existentes:</p>
                <pre className="bg-gray-200 text-black p-4 rounded-md mb-4"><code>SHOW DATABASES;</code></pre>
                <p className="mb-4">Criar um novo banco de dados:</p>
                <pre className="bg-gray-200 text-black p-4 rounded-md mb-4"><code>CREATE DATABASE teste;</code></pre>
                <p className="mb-4">Usar um banco de dados:</p>
                <pre className="bg-gray-200 text-black p-4 rounded-md mb-4"><code>USE teste;</code></pre>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">9. Parar e reiniciar o contêiner</h2>
                <p className="mb-4">Para parar o contêiner:</p>
                <pre className="bg-gray-200 text-black p-4 rounded-md mb-4"><code>docker stop meu-mysql</code></pre>
                <p className="mb-4">Para reiniciar:</p>
                <pre className="bg-gray-200 text-black p-4 rounded-md mb-4"><code>docker start meu-mysql</code></pre>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">10. Pronto!</h2>
                <p className="mb-4">Agora o aluno tem o MySQL rodando no Docker e pode praticar à vontade.</p>
                <p className="mb-4">Se precisar de mais alguma coisa, estou à disposição! 😊</p>
            </section>
        </>
    );
}
