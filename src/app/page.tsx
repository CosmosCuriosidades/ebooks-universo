"use client"

import { Star, Telescope, Rocket, BookOpen, Download, Play, Users, Award } from "lucide-react"

export default function Home() {
  const featuredEbooks = [
    {
      id: 1,
      title: "Segredos dos Buracos Negros",
      subtitle: "Mistérios que desafiam a física",
      author: "Dr. Marcus Silva",
      cover: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop",
      rating: 4.9,
      downloads: "12.5k",
      category: "Astrofísica",
      price: "Grátis"
    },
    {
      id: 2,
      title: "Vida Extraterrestre: Realidade ou Ficção?",
      subtitle: "A busca por vida no cosmos",
      author: "Dra. Ana Costa",
      cover: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=600&fit=crop",
      rating: 4.8,
      downloads: "8.9k",
      category: "Astrobiologia",
      price: "R$ 19,90"
    },
    {
      id: 3,
      title: "O Universo em Expansão",
      subtitle: "Como tudo começou e para onde vamos",
      author: "Prof. João Santos",
      cover: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&h=600&fit=crop",
      rating: 4.7,
      downloads: "15.2k",
      category: "Cosmologia",
      price: "R$ 24,90"
    }
  ]

  const categories = [
    { name: "Astronomia", icon: Telescope, count: 45, color: "from-blue-500 to-cyan-500" },
    { name: "Astrofísica", icon: Star, count: 32, color: "from-purple-500 to-pink-500" },
    { name: "Cosmologia", icon: Rocket, count: 28, color: "from-orange-500 to-red-500" },
    { name: "Astrobiologia", icon: BookOpen, count: 19, color: "from-green-500 to-teal-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <Telescope className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                CosmosBooks
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Descubra os <span className="text-yellow-400 font-semibold">mistérios fascinantes</span> do universo através de ebooks exclusivos sobre astronomia, astrofísica e cosmologia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25">
                <BookOpen className="w-5 h-5 inline mr-2" />
                Explorar Ebooks
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300">
                <Play className="w-5 h-5 inline mr-2" />
                Ver Prévia
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400">150+</div>
              <div className="text-gray-400">Ebooks Disponíveis</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">50k+</div>
              <div className="text-gray-400">Downloads</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">25+</div>
              <div className="text-gray-400">Autores Especialistas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-pink-400">4.8★</div>
              <div className="text-gray-400">Avaliação Média</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ebooks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ebooks em <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Destaque</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Os ebooks mais populares sobre os mistérios do cosmos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEbooks.map((book) => (
              <div key={book.id} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-6 hover:scale-105 transition-all duration-500 border border-slate-700/50 hover:border-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="aspect-[3/4] mb-6 overflow-hidden rounded-2xl">
                    <img 
                      src={book.cover} 
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                        {book.category}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold">{book.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{book.subtitle}</p>
                    <p className="text-gray-500 text-sm">por {book.author}</p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Download className="w-4 h-4" />
                        {book.downloads}
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{book.price}</div>
                      </div>
                    </div>
                    
                    <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      {book.price === "Grátis" ? "Download Grátis" : "Comprar Agora"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore por <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Categoria</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Encontre ebooks sobre seus tópicos favoritos do universo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all duration-300 border border-slate-700/50 hover:border-purple-500/50 cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-400">{category.count} ebooks disponíveis</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-8 h-8 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Acesso Premium
              </h2>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Tenha acesso ilimitado a todos os ebooks, conteúdo exclusivo e atualizações constantes sobre as últimas descobertas do universo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400">R$ 29,90</div>
                <div className="text-gray-400">por mês</div>
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25">
                <Users className="w-5 h-5 inline mr-2" />
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/40 backdrop-blur-sm border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Telescope className="w-6 h-6 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CosmosBooks
              </span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Expandindo horizontes através do conhecimento sobre o universo. 
              Descubra os mistérios do cosmos com nossos ebooks especializados.
            </p>
            <div className="flex justify-center gap-6 text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Sobre</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contato</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Termos</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Privacidade</a>
            </div>
            <div className="pt-6 border-t border-slate-800">
              <p className="text-gray-500 text-sm">
                © 2024 CosmosBooks. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}