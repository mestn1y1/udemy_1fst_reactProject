import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/App-info";
import EmployersList from "../emloyers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

export default function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList />
      <EmployersAddForm />
    </div>
  );
}
