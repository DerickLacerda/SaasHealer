"use client";
import { useState } from "react";
import Link from "next/link";
import GlassmorphismCard from "../components/glassmorphism-card"; //nomenclatura

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [genero, setGenero] = useState("");

  return (
    <main className="min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
          <GlassmorphismCard>
            {/* Título e descrição dentro do card */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-white mb-2">Criar Conta</h1>
              <p className="text-white/80">
                Comece sua jornada com o SaaSHealer
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="senha" className="block text-sm font-medium text-white mb-1">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Digite sua senha"
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="cpf" className="block text-sm font-medium text-white mb-1">
                  CPF
                </label>
                <input
                  type="text"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="000.000.000-00"
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="dataNascimento" className="block text-sm font-medium text-white mb-1">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  id="dataNascimento"
                  value={dataNascimento}
                  onChange={(e) => setDataNascimento(e.target.value)}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-white mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="genero" className="block text-sm font-medium text-white mb-1">
                  Gênero
                </label>
                <select
                  id="genero"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                >
                  <option value="" className="text-blue-600">Selecione</option>
                  <option value="masculino" className="text-blue-600">Masculino</option>
                  <option value="feminino" className="text-blue-600">Feminino</option>
                  <option value="outro" className="text-blue-600">Outro</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Cadastrar
              </button>
            </form>

            <p className="mt-6 text-center text-white/80">
              Já tem uma conta?{" "}
              <Link href="/login" className="text-white hover:text-white/90 underline">
                Faça login
              </Link>
            </p>
          </GlassmorphismCard>
        </div>
      </div>
    </main>
  );
}