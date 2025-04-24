import imgAnimada from "../public/animada.svg"

export default function App(){
    return (
      <div className="w-full h-screen flex bg-[#201b2c]">
        <div className="w-[50%] h-full flex items-center justify-center flex-col">
          <h1 className="text-[30px] font-bold text-[#00ff88]">Entre para o nosso time</h1>
          <img src={imgAnimada} alt="imagem-animada" width={500} />
        </div>
        <div className="w-[50%] h-full flex items-center justify-center">
          <div className="w-[50%] h-[350px] bg-[#2f2942] rounded-xl">
            <div className="w-full h-[15%] flex items-center justify-center">
              <h1 className="text-[30px] text-[#00ff88] font-bold">LOGIN</h1>
            </div>
            <div className="w-full h-[60%] p-[20px]">
              <label htmlFor="user" className="text-white">Usuário</label>
              <input type="text" id="user" className="w-full rounded-md p-[10px] bg-[#514768] text-white mb-4" />

              <label htmlFor="pass" className="text-white">Senha</label>
              <input type="password" id="pass" className="w-full rounded-md p-[10px] bg-[#514768] text-white"/>
              <div className="w-full flex items-center justify-center text-white pt-1">
                <a href="">Esqueceu sua senha?</a>
              </div>
            </div>
            <div className="w-full h-[25%] p-[20px] flex items-center">
              <button className="w-full h-[50px] text-[18px] font-bold text-[#201b2c] rounded-lg bg-[#00ff88] shadow-lg shadow-[#33f79c63]">LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    )
}