import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

const shopCategories = [
  "All",
  "Engine & Performance",
  "Exhaust Systems",
  "Suspension & Coilovers",
  "Wheels & Tires",
  "Brakes",
  "Interior & Exterior",
  "Electronics & Gauges",
  "Accessories & Apparel",
];

const products = [
  { id: 1, name: "BC Racing BR Coilovers", price: 1299.99, category: "Suspension & Coilovers", brand: "BC Racing", compat: "Subaru WRX/STI 2015+", image: "🏎️" },
  { id: 2, name: "Invidia N1 Cat-Back Exhaust", price: 899.99, category: "Exhaust Systems", brand: "Invidia", compat: "Honda Civic Type R 2017+", image: "💨" },
  { id: 3, name: "Cobb Accessport V3", price: 749.99, category: "Electronics & Gauges", brand: "Cobb", compat: "Subaru WRX/STI 2015+", image: "⚡" },
  { id: 4, name: "StopTech Big Brake Kit", price: 2199.99, category: "Brakes", brand: "StopTech", compat: "BMW M3/M4 2015+", image: "🛑" },
  { id: 5, name: "Garrett GTX3576R Turbo", price: 1849.99, category: "Engine & Performance", brand: "Garrett", compat: "Universal", image: "🔧" },
  { id: 6, name: "Enkei RPF1 Wheels 18x9.5", price: 1399.99, category: "Wheels & Tires", brand: "Enkei", compat: "5x114.3", image: "🛞" },
  { id: 7, name: "Bride Zeta III Seat", price: 1099.99, category: "Interior & Exterior", brand: "Bride", compat: "Universal", image: "💺" },
  { id: 8, name: "AEM Cold Air Intake", price: 349.99, category: "Engine & Performance", brand: "AEM", compat: "Ford Mustang GT 2018+", image: "🌀" },
  { id: 9, name: "Whiteline Sway Bar Kit", price: 499.99, category: "Suspension & Coilovers", brand: "Whiteline", compat: "Toyota GR86 2022+", image: "🏎️" },
  { id: 10, name: "Mishimoto Radiator", price: 429.99, category: "Engine & Performance", brand: "Mishimoto", compat: "Nissan 370Z 2009+", image: "🌡️" },
  { id: 11, name: "APR Carbon Fiber Wing", price: 799.99, category: "Interior & Exterior", brand: "APR", compat: "Universal", image: "🪽" },
  { id: 12, name: "Tuning Factory T-Shirt", price: 34.99, category: "Accessories & Apparel", brand: "Tuning Factory", compat: "Sizes S-XXL", image: "👕" },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filtered = products
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

  return (
    <Layout>
      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="font-heading text-4xl font-bold text-foreground">Shop Performance Parts</h1>
            <p className="mt-2 text-muted-foreground">Premium aftermarket parts shipped Canada-wide</p>
          </div>

          {/* Filters Bar */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products or brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar Categories */}
            <aside className="w-full shrink-0 lg:w-56">
              <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-primary">Categories</h3>
              <ul className="space-y-1">
                {shopCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        activeCategory === cat
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <p className="mb-4 text-sm text-muted-foreground">{filtered.length} products found</p>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="group rounded-lg border border-border bg-gradient-card overflow-hidden transition-all hover:border-primary/40"
                  >
                    <div className="flex h-44 items-center justify-center bg-muted text-5xl">
                      {product.image}
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{product.brand}</p>
                      <h3 className="mt-1 font-heading text-base font-bold text-foreground">{product.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{product.compat}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="font-heading text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                        <Button size="sm" className="bg-primary text-primary-foreground font-heading text-xs font-semibold uppercase tracking-wider hover:bg-primary/90">
                          <ShoppingCart className="mr-1 h-3.5 w-3.5" /> Add
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
