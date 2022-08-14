import './App.scss';
import { Box, Btn } from 'components';
import { ReactComponent as Idea } from 'assets/icons/idea.svg';
import { todos } from 'data';

const App = () => {
  return (
    <div className="app">
      <nav className="nav">
        <Idea />
        <h2>6 Suggestions</h2>

        <span>Sort by:</span>
        <select>
          <option selected>Most Upvotes</option>
          <option>Least Upvotes</option>
        </select>

        <Btn type="nav">+ Add Feedback</Btn>
      </nav>

      <aside className="aside">
        <Box type="inverse">
          <h1>Frontend Mentor</h1>
          <h4>Feedback Board</h4>
        </Box>

        <Box type="overview">
          <Btn active>All</Btn>
          <Btn>UI</Btn>
          <Btn>UX</Btn>
          <Btn>Enhancement</Btn>
          <Btn>Bug</Btn>
          <Btn>Feature</Btn>
        </Box>

        <Box type="roadmap">
          <div>
            <h2>Roadmap</h2>
            <a href="#">View</a>
          </div>

          <div>
            <span></span>
            <p>Planned</p>
            <h2>2</h2>
          </div>

          <div>
            <span></span>
            <p>In-Progress</p>
            <h2>3</h2>
          </div>

          <div>
            <span></span>
            <p>Live</p>
            <h2>1</h2>
          </div>
        </Box>
      </aside>

      <main className="main">
        {todos.map((todo, idx) => (
          <Box key={idx} type="main" {...todo} />
        ))}
      </main>
      
    </div>
  );
};

export default App;
