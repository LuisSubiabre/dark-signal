import { useEffect } from 'react'
import { useApp } from './context/AppContext'
import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'
import { TopBar } from './components/layout/TopBar'
import { FocusView } from './components/layout/FocusView'
import { Overview } from './components/sections/Overview'
import { Palette } from './components/sections/Palette'
import { Arrangement } from './components/sections/Arrangement'
import { SubBass } from './components/sections/SubBass'
import { PulseBass } from './components/sections/PulseBass'
import { Drums } from './components/sections/Drums'
import { Drone } from './components/sections/Drone'
import { Pad } from './components/sections/Pad'
import { Signal } from './components/sections/Signal'
import { Atmosphere } from './components/sections/Atmosphere'
import { Space } from './components/sections/Space'
import { Automation } from './components/sections/Automation'
import { Returns } from './components/sections/Returns'
import { Rules } from './components/sections/Rules'
import { Checklist } from './components/sections/Checklist'

export default function App() {
  const { focusMode, currentPhase, currentBar, progress } = useApp()

  useEffect(() => {
    document.body.classList.toggle('focus-mode', focusMode)
  }, [focusMode])

  return (
    <div className="grid-bg min-h-screen bg-void text-paper">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <TopBar />
          {focusMode ? (
            <FocusView />
          ) : (
            <main className="px-4 lg:px-8">
              <Header />
              <Overview />
              <Palette />
              <Arrangement />
              <SubBass />
              <PulseBass />
              <Drums />
              <Drone />
              <Pad />
              <Signal />
              <Atmosphere />
              <Space />
              <Automation />
              <Returns />
              <Rules />
              <Checklist />
              <footer className="border-t border-line py-8">
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-mist">
                  <span>DARK SIGNAL · 110 BPM · F MINOR</span>
                  <span>
                    {currentPhase.name} · BAR {currentBar} · {progress}%
                  </span>
                </div>
              </footer>
            </main>
          )}
        </div>
      </div>
    </div>
  )
}
