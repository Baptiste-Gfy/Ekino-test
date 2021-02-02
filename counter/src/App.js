import ClassCounter from "./components/class-counter/ClassCounter";
import HookCounter from "./components/hook-counter/HookCounter";
import Styles from "./css/App.module.css";

function App() {
  return (
    <div className={Styles.app}>
      <h1 className={Styles.titleEkino}>Test technique Ekino</h1>
      <p>Réaliser un compteur sous forme de classe qui s'implémente au clic</p>
      <p>Je me suis permis de rajouter un compteur sous forme de hook </p>
      <div className={Styles.counterBlock}>
        <ClassCounter />
        <HookCounter />
      </div>
    </div>
  );
}

export default App;
