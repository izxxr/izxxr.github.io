import Navbar from './components/Nav';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import { useTheme } from '@heroui/use-theme';
import type { ComponentCommonProps } from './types';

export default function App() {
  const { theme, setTheme } = useTheme();
  const comp_props: ComponentCommonProps = {
    theme: theme,
    setTheme: setTheme,
  }

  return (
    <>
      <Navbar {...comp_props} />
      <Home {...comp_props} />
      <About {...comp_props} />
      <Projects {...comp_props} />
    </>
  )
}
