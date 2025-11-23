import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Leaf, TrendingUp, DollarSign } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BusinessPlan() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedYear, setExpandedYear] = useState(null);
  const [priceScenario, setPriceScenario] = useState(1.8);

  const capexItems = [
    { category: '⚡ Энергетика и вода', items: [
      { name: 'Трансформатор 60 кВ', cost: 40000 },
      { name: 'Артезианская скважина', cost: 20000 },
    ]},
    { category: '🏗️ Территория', items: [
      { name: 'Ограждение + подготовка земли', cost: 15000 },
    ]},
    { category: '💧 Орошение премиум', items: [
      { name: 'Система Netafim (Израиль)', cost: 50000 },
    ]},
    { category: '🌊 Резервуар 2000 м³', items: [
      { name: 'Земляные работы', cost: 4000 },
      { name: 'Доставка (КамАЗ)', cost: 300 },
      { name: 'Мембрана (Испания)', cost: 13000 },
    ]},
    { category: '🌸 Саженцы (6600 деревьев)', items: [
      { name: 'Саженцы (6600 × 7.65 AZN)', cost: 50490 },
      { name: 'Посадка (6600 × 1 AZN)', cost: 6600 },
    ]},
    { category: '🏡 Инфраструктура', items: [
      { name: 'Жилой дом', cost: 35000 },
      { name: 'Контейнер', cost: 5000 },
      { name: 'Ворота', cost: 2000 },
      { name: 'Навесы (2 шт)', cost: 5000 },
      { name: 'Санблок', cost: 1000 },
      { name: 'Свет + камеры', cost: 2000 },
      { name: 'Интернет', cost: 20 },
    ]},
    { category: '🚜 Техника', items: [
      { name: 'Трактор Bashag', cost: 35000 },
      { name: 'Опрыскиватель', cost: 12000 },
      { name: 'Мульчер', cost: 5000 },
      { name: 'Культиватор', cost: 6500 },
      { name: 'Борона', cost: 2500 },
      { name: 'Mitsubishi', cost: 13000 },
    ]},
    { category: '👷 Персонал (3 года)', items: [
      { name: 'Охрана, тракторист, бригадир, обрезка', cost: 28000 },
    ]},
  ];

  const totalCapex = capexItems.reduce((sum, cat) => 
    sum + cat.items.reduce((s, item) => s + item.cost, 0), 0
  );

  const cultures = [
    { name: '🍑 Нектарин', area: 2, varieties: 'Oreal, Exteim 28' },
    { name: '🍑 Персик плоский', area: 2, varieties: 'Zodiac, Babilion, Katenza' },
    { name: '🍊 Абрикос', area: 2, varieties: 'Ağ Erik Xrustal' },
    { name: '🍑 Персик классический', area: 2, varieties: 'Zadikak' },
    { name: '🍒 Черешня премиум', area: 2, varieties: 'Giant Red, Can Trek' },
    { name: '🍒 Черешня', area: 1, varieties: 'Yerlo Lori' },
    { name: '🍒 Черешня десертная', area: 1, varieties: 'Sweet Alina, Sweet Gabriel' },
  ];

  const revenueData = [
    { year: 3, yieldMin: 150, yieldMax: 200 },
    { year: 4, yieldMin: 250, yieldMax: 300 },
    { year: 5, yieldMin: 400, yieldMax: 450 },
    { year: 6, yieldMin: 450, yieldMax: 500 },
    { year: 7, yieldMin: 600, yieldMax: 600 },
  ];

  const getRevenue = (tons, price) => tons * price * 1000;

  const chartData = revenueData.map(d => ({
    year: `Год ${d.year}`,
    min: getRevenue(d.yieldMin, priceScenario),
    max: getRevenue(d.yieldMax, priceScenario),
    avg: getRevenue((d.yieldMin + d.yieldMax) / 2, priceScenario),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-700 px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">🌳 Премиальный садовый проект</h1>
          <p className="text-green-100 mb-6">10 гектаров | Схема посадки 5×3 метра | Исмаиллы, Азербайджан</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xl font-bold">351k AZN</div>
              <div className="text-xs text-green-100">Инвестиции (3 года)</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xl font-bold">5-6 лет</div>
              <div className="text-xs text-green-100">Окупаемость</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xl font-bold">6600</div>
              <div className="text-xs text-green-100">Саженцев элитных сортов</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xl font-bold">1.3M+ AZN</div>
              <div className="text-xs text-green-100">Пиковая выручка (год 7+)</div>
            </div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="sticky top-0 z-40 bg-slate-800/95 border-b border-white/10 px-6 overflow-x-auto">
        <div className="max-w-6xl mx-auto flex gap-1 py-3 whitespace-nowrap">
          {[
            { id: 'overview', label: '📊 Обзор' },
            { id: 'capex', label: '💰 Инвестиции' },
            { id: 'cultures', label: '🌱 Культуры' },
            { id: 'revenue', label: '📈 Прогноз выручки' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                activeTab === tab.id 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-8">

        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-600/30 rounded-lg p-6">
              <div className="flex gap-3">
                <Leaf className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2 text-lg">🌟 КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА</h3>
                  <ul className="text-sm space-y-1 text-gray-200">
                    <li>✅ Премиальное израильское оборудование Netafim</li>
                    <li>✅ Элитные сорта с высокой урожайностью</li>
                    <li>✅ Интенсивная схема посадки 5×3 метра</li>
                    <li>✅ Полная автоматизация орошения</li>
                    <li>✅ Современная инфраструктура и техника</li>
                    <li>✅ Благоприятный климат района Исмаиллы</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-lg p-6">
                <div className="text-xs opacity-80 mb-2">Общая инвестиция</div>
                <div className="text-3xl font-bold">351 410 AZN</div>
                <div className="text-xs opacity-80 mt-1">Все расходы первые 3 года</div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-lg p-6">
                <div className="text-xs opacity-80 mb-2">Ожидаемая выручка год 7+</div>
                <div className="text-3xl font-bold">900k - 1.3M</div>
                <div className="text-xs opacity-80 mt-1">При цене 1.5 - 2.2 AZN/кг</div>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-lg p-6">
                <div className="text-xs opacity-80 mb-2">Пиковая урожайность</div>
                <div className="text-3xl font-bold">600+ тонн</div>
                <div className="text-xs opacity-80 mt-1">60+ т/га начиная с года 7</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-bold mb-4 text-lg">📍 Структура инвестиций</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span>⚡ Энергетика и вода</span>
                    <span className="font-bold text-green-400">60 000 AZN</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span>💧 Орошение Netafim</span>
                    <span className="font-bold text-green-400">50 000 AZN</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span>🚜 Техника</span>
                    <span className="font-bold text-green-400">74 000 AZN</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span>🌸 Саженцы + посадка</span>
                    <span className="font-bold text-green-400">57 090 AZN</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span>🏡 Инфраструктура</span>
                    <span className="font-bold text-green-400">50 020 AZN</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span>🌊 Резервуар 2000 м³</span>
                    <span className="font-bold text-green-400">17 300 AZN</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span>🏗️ Территория</span>
                    <span className="font-bold text-green-400">15 000 AZN</span>
                  </div>
                  <div className="flex justify-between p-3 bg-white/5 rounded">
                    <span>👷 Персонал (3 года)</span>
                    <span className="font-bold text-green-400">28 000 AZN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'capex' && (
          <div className="space-y-4">
            {capexItems.map((category, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-5">
                <h3 className="font-bold text-lg mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded">
                      <span className="text-gray-200">{item.name}</span>
                      <span className="font-bold text-green-400">{item.cost.toLocaleString()} AZN</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 flex justify-between font-bold">
                  <span>Итого по категории:</span>
                  <span className="text-yellow-400">
                    {category.items.reduce((sum, item) => sum + item.cost, 0).toLocaleString()} AZN
                  </span>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-2 border-green-500 rounded-lg p-6 mt-6">
              <div className="text-center">
                <h3 className="font-bold text-2xl mb-2">🔵 ОБЩАЯ ИНВЕСТИЦИЯ</h3>
                <div className="text-5xl font-bold text-green-400 mb-2">
                  {totalCapex.toLocaleString()} AZN
                </div>
                <p className="text-sm text-gray-300">Все расходы первые 3 года</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cultures' && (
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg mb-2">🌱 Элитные сорта косточковых</h3>
              <p className="text-sm text-gray-300 mb-4">6600 саженцев на 10 гектарах по схеме 5×3 метра</p>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-green-500/10 p-3 rounded border border-green-600/30">
                  <span className="font-semibold text-green-400">Стоимость саженцев:</span>
                  <span className="ml-2">6600 × 7.65 AZN = 50 490 AZN</span>
                </div>
                <div className="bg-blue-500/10 p-3 rounded border border-blue-600/30">
                  <span className="font-semibold text-blue-400">Стоимость посадки:</span>
                  <span className="ml-2">6600 × 1 AZN = 6 600 AZN</span>
                </div>
              </div>
            </div>

            {cultures.map((culture, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-lg">{culture.name}</h4>
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {culture.area} га
                  </span>
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold text-gray-200">Сорта:</span> {culture.varieties}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'revenue' && (
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">💵 Выберите ценовой сценарий</h3>
              <div className="grid grid-cols-3 gap-3">
                {[1.5, 1.8, 2.2].map(price => (
                  <button
                    key={price}
                    onClick={() => setPriceScenario(price)}
                    className={`p-4 rounded-lg font-bold transition-all ${
                      priceScenario === price
                        ? 'bg-green-600 text-white scale-105'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {price} AZN/кг
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-bold mb-4 text-lg">📊 Динамика выручки</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                  <Legend />
                  <Area type="monotone" dataKey="min" stroke="#fbbf24" fill="#fbbf2420" name="Минимум" />
                  <Area type="monotone" dataKey="avg" stroke="#10b981" fill="url(#colorAvg)" name="Среднее" />
                  <Area type="monotone" dataKey="max" stroke="#3b82f6" fill="#3b82f620" name="Максимум" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              {revenueData.map((year) => (
                <div key={year.year}>
                  <button
                    onClick={() => setExpandedYear(expandedYear === year.year ? null : year.year)}
                    className="w-full p-4 rounded-lg flex items-center justify-between bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-600/30 hover:border-green-500/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-2xl text-green-400">ГОД {year.year}</span>
                      <span className="text-sm text-gray-300">
                        Урожай: {year.yieldMin}-{year.yieldMax} т
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-sm text-gray-400">При {priceScenario} AZN/кг</div>
                        <div className="font-bold text-green-400 text-lg">
                          {(getRevenue(year.yieldMin, priceScenario)/1000).toFixed(0)}k - {(getRevenue(year.yieldMax, priceScenario)/1000).toFixed(0)}k AZN
                        </div>
                      </div>
                      {expandedYear === year.year ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </button>

                  {expandedYear === year.year && (
                    <div className="mt-2 p-5 bg-white/5 rounded-lg border border-white/10">
                      <h4 className="font-bold mb-3">Детализация по всем сценариям:</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {[1.5, 1.8, 2.2].map(price => (
                          <div key={price} className={`p-4 rounded-lg ${price === priceScenario ? 'bg-green-600/20 border border-green-500' : 'bg-white/5'}`}>
                            <div className="text-center">
                              <div className="text-sm text-gray-400 mb-1">{price} AZN/кг</div>
                              <div className="font-bold text-lg">
                                {(getRevenue(year.yieldMin, price)/1000).toFixed(0)}k
                              </div>
                              <div className="text-xs text-gray-400">до</div>
                              <div className="font-bold text-xl text-green-400">
                                {(getRevenue(year.yieldMax, price)/1000).toFixed(0)}k AZN
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border-2 border-orange-500 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-2 text-orange-300">🏆 ГОД 7+ (Пиковая урожайность)</h3>
              <p className="text-sm text-gray-300 mb-4">Урожай: 600+ тонн (60+ т/га)</p>
              <div className="grid grid-cols-3 gap-4">
                {[1.5, 1.8, 2.2].map(price => (
                  <div key={price} className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-sm text-gray-400 mb-1">{price} AZN/кг</div>
                    <div className="text-2xl font-bold text-yellow-400">
                      {(price * 600000 / 1000000).toFixed(1)}M+ AZN
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-600/30 rounded-lg p-5">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-blue-300">Примечание:</span> Расходы на уборку урожая (ручной сбор, сезонные работники, техника, логистика) уточняются отдельно и зависят от объема урожая и рыночных условий.
              </p>
            </div>
          </div>
        )}

      </div>

      {/* FOOTER */}
      <div className="border-t border-white/10 mt-12 py-6 px-6 text-center text-gray-400 text-sm">
        <p className="font-semibold text-green-400 mb-2">✨ Высокопродуктивный интенсивный сад с современными агротехнологиями</p>
        <p>📍 Полная окупаемость к 5-6 году эксплуатации</p>
        <p className="mt-2">🎯 Инвестиция: <span className="font-bold text-white">351 410 AZN</span></p>
        <p>🚀 Пиковая выручка: <span className="font-bold text-green-400">до 1.3+ млн AZN/год</span></p>
        <p className="mt-4 text-xs">Исмаиллы, Азербайджан | 2025</p>
      </div>
    </div>
  );
}