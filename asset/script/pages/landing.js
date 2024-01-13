const landingPage = `
    <div class="quiz-container">
      <div class="quiz">
        <h1>Quiz</h1>
        <img src="asset/image/Ellipse 1.svg" alt="logo" />
        <button class="btn">Welcome!</button>
      </div>

      <div class="selection">
        <h4>Make Selection</h4>
        
        <div class="qst-btn">
          <label for="">Number of questions:</label>
          <button  class="num-quest">Short</button>
          <button class="num-quest">Medium</button>
          <button class="num-quest">Long</button>
        </div>

        <div class="category">
          <label for="">Select category:</label>
          <select name="" id="select-category">
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment Books</option>
            <option value="11">Entertainment Film</option>
            <option value="12">Entertainment Music</option>
          </select>
        </div>

        <div class="select-df">
          <label for="">Select Difficulty:</label>
          <button class="sel-diff" name="easy">Easy</button>
          <button class="sel-diff" name="medium">Medium</button>
          <button class="sel-diff" name="hard">Hard</button>
        </div>

        <div class="type">
          <label for="">Select Type:</label>
          <button class="sel-type" name="multiple">Multiple Choice</button>
          <button class="sel-type" name="boolean">True/False</button>
        </div>
      </div>

      <button id="play">Start quiz</button>
    </div>
`

export default landingPage
