import React, { useState, useEffect } from 'react';
import { CalendarSearch, Search, X } from 'lucide-react';
import { useFetchData } from "../../hooks/useFetchData"
import { LoadingCard } from '../components/LoadingCard';
import { EmptyState } from '../components/EmptyState';
import { PageTransition } from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import CardEvent from '../components/card/event';

export function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState<any[]>([])
  const [selectedType, setSelectedType] = useState('Tous');
  const [selectedLevel, setSelectedLevel] = useState('Tous');
  const [startDate, setStartDate] = useState("Tous")
  const [endDate, setEndDate] = useState("Tous")
  const { t } = useLanguage()
  const { fetch: fetchEvents, loading: isLoading } = useFetchData({ uri: "infos-user/user-event/get" })

  useEffect(() => {
    (async function () {
      const where: any = {
        
        startDate: startDate == "Tous" ? startDate : new Date(startDate).toISOString(),
        endDate: endDate == "Tous" ? endDate : new Date(endDate).toISOString()
      }

      if (startDate == "Tous") delete where.startDate
      if (endDate == "Tous") delete where.endDate

      console.log(where, startDate, endDate)

      const { data } = await fetchEvents(where, "POST")
      if (data?.data) {
        setEvents(data.data)
      }
    })()

  }, [startDate, endDate]);

  const filteredEvents = events.filter(post => {
    const matchesSearch = `${post.title}`.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'Tous' || post.type === selectedType;
    const matchesLevel = selectedLevel === 'Tous' || post.level === selectedLevel;
    return matchesSearch && matchesType && matchesLevel;
  });

  const hasActiveFilters = startDate !== 'Tous' || endDate !== 'Tous'

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedType('Tous');
    setSelectedLevel('Tous');
    setStartDate('Tous');
    setEndDate('Tous');
  };

  const ActiveFilterPill: React.FC<{ label: string; onRemove: () => void }> = ({ label, onRemove }) => (
    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-highlight/10 text-highlight rounded-full text-sm font-medium">
      {label}
      <button
        onClick={onRemove}
        className="p-0.5 rounded-full hover:bg-highlight hover:text-white transition-colors"
      >
        <X className="w-3 h-3" />
      </button>
    </span>
  );

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-black text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              {t("events.banner.title").split(" ").map(function (element, index: number) {
                if (index == 0) {
                  return <span className="w-fit" key={index}>{element}</span>
                } else {
                  return <span key={index} className="ml-2 text-highlight"> {element}</span>
                }
              })}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl">
              {t("events.banner.description")}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200 py-4">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              {/* Search and Filter Toggle */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-96">
                  <input
                    type="text"
                    placeholder="Rechercher une diffusion..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  )}
                </div>
                <div className="flex gap-4">
                  <div className="relative w-full sm:w-48">
                    <input
                      type="date"
                      placeholder="Date de debut..."
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                    />
                    <CalendarSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
                      >
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    )}
                  </div>
                  <div className="relative w-full sm:w-48">
                    <input
                      type="date"
                      placeholder="Date de fin..."
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-black/10 focus:border-highlight focus:ring-0 bg-white"
                    />
                    <CalendarSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
                      >
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    )}
                  </div>
                </div>

              </div>


              {/* Active Filters */}
              <AnimatePresence>
                {hasActiveFilters && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-wrap items-center gap-2"
                  >
                    <span className="text-sm text-gray-500">Filtres actifs:</span>
                    {startDate !== 'Tous' && (
                      <ActiveFilterPill
                        label={"Date de debut"}
                        onRemove={() => setStartDate('Tous')}
                      />
                    )}

                    {endDate !== 'Tous' && (
                      <ActiveFilterPill
                        label={"Date de fin"}
                        onRemove={() => setEndDate('Tous')}
                      />
                    )}
                    <button
                      onClick={resetFilters}
                      className="text-sm text-gray-500 hover:text-highlight transition-colors"
                    >
                      Réinitialiser tout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[...Array(8)].map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </div>
          ) : filteredEvents.length === 0 ? (
            <EmptyState
              title="Aucun Event trouvé"
              description="Nous n'avons trouvé aucun event correspondant à vos critères de recherche. Essayez de modifier vos filtres ou d'effectuer une nouvelle recherche."
              action={{
                label: "Réinitialiser les filtres",
                onClick: resetFilters
              }}
            />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredEvents.map((post, index) => (
                <CardEvent {...post} key={index} />
              ))}
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
}