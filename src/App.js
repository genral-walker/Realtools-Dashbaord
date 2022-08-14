import './App.scss';
import { Box, Btn } from 'components';
import { ReactComponent as Idea } from 'assets/icons/idea.svg';

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
        <Box
          type="main"
          votes="112"
          topic="Add tags for solutions"
          details="Easier to search for solutions based on specific stack."
          count="2"
          btnName="Enhancement"
        />

        <Box
          type="main"
          votes="99"
          topic="Add a dark theme option"
          details="It would help people with light sensitivities and who prefer dark mode."
          count="4"
          btnName="Feature"
        />

        <Box
          type="main"
          votes="65"
          topic="Q&A within the challenge hubs"
          details="Challenge-specific Q&A would make for easy reference."
          count="1"
          btnName="Feature"
        />

        <Box
          type="main"
          votes="51"
          topic="Allow image/video upload to feedback"
          details="Images and screencasts can enhance comments on solutions."
          count="2"
          btnName="Enhancement"
        />

        <Box
          type="main"
          votes="42"
          topic="Ability to follow others"
          details="Stay updated on comments and solutions other people post."
          count="3"
          btnName="Feature"
        />

        <Box
          type="main"
          votes="3"
          topic="Q&A within the challenge hubs"
          details="Challenge preview images are missing when you apply a filter."
          count="0"
          btnName="Bug"
        />
      </main>
    </div>
  );
};

export default App;
