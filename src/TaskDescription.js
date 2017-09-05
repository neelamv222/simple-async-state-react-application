import React from 'react';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'left',
}

const code = {
    fontFamily: 'Andale Mono, monospace',
    textAlign: 'left',
}

const TaskDescription = () => (
    <div style={styles}>
        <h2>Coding task</h2>
        <p>
            Your task is to write a simple React Application that renders list of repositories In the following manner:
    </p>
        <pre>
            {`
        â€¢ <name> - ðŸŒŸ <stars> - ðŸ´ <forks>
        â€¢ react - ðŸŒŸ 69012 - ðŸ´ 12581
        â€¢ reselect - ðŸŒŸ 7291 - ðŸ´ 214
        â€¢ redux - ðŸŒŸ 31705 - ðŸ´ 6581
        â€¢ recompose - ðŸŒŸ 5671 - ðŸ´ 342
      `}
        </pre>
        <p>
            Please use method <span style={code}>getReactRepositories</span> fetch list of repositories, once resolved it will return list in following format:
      </p>
        <pre>
            {`
          [
            {name: 'react', stars: 69012, forks: 12581, url: 'http://â€¦'},
            {name: 'react', stars: 7291, forks: 214, url: 'http://â€¦'},
            {name: 'react', stars: 31705, forks: 6581, url: 'http://â€¦'},
            {name: 'react', stars: 5671, forks: 342, url: 'http://â€¦'}
          ]
        `}
        </pre>

        <h2>Bonus Task</h2>
        <p>
            Bonus task is to create a higher order component that will then wrap
      the list of repositories and provide a "More/Less" button that will
      expanse or collapse the list, for example:
    </p>
        <pre>
            {`
        // Expanded Mode
        +-----------------------------------------------+
        | <name> | ðŸŒŸ <numberOfStars> |ðŸ´ <numberOfForks>|
        +-----------------------------------------------+
        | react      |     ðŸŒŸ 69012      |   ðŸ´ 12581    |
        +-----------------------------------------------+
        | reselect    |     ðŸŒŸ 7291       |   ðŸ´ 214      |
        +-----------------------------------------------+
        | redux      |     ðŸŒŸ 31705      |   ðŸ´ 6581     |
        +-----------------------------------------------+
        | recompose  |     ðŸŒŸ 5671       |   ðŸ´ 342      |
        +-----------------------------------------------+
        | See Less Button |
        +-----------------+

        // Collapsed Mode
        +-----------------------------------------------+
        | <name> | ðŸŒŸ <numberOfStars> |ðŸ´ <numberOfForks>|
        +-----------------------------------------------+
        | react      |     ðŸŒŸ 69012      |   ðŸ´ 12581    |
        +-----------------------------------------------+
        | reselect    |     ðŸŒŸ 7291       |   ðŸ´ 214      |
        +-----------------------------------------------+
        | See More Button |
        +-----------------+
      `}
        </pre>
    </div>
)

export default TaskDescription
