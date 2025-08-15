// Interfaces para os itens do cardápio
interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

// Interface para as props do componente Menu
interface MenuProps {
  menuItems: MenuCategory[];
}

function Menu({ menuItems }: MenuProps) {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-yellow-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-amber-800 mb-6">
            Cardápio Completo
          </h2>
          <p className="text-lg text-amber-700">
            Conheça todos os nossos sabores autênticos
          </p>
        </div>

        {menuItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-3xl font-bold font-serif text-amber-800 mb-8 text-center">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-amber-800">{item.name}</h4>
                    <span className="text-xl font-bold text-red-600">{item.price}</span>
                  </div>
                  <p className="text-amber-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;