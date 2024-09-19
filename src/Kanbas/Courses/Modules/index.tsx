export default function Modules() {
	return (
	  <div>
		{/* Implement Collapse All button, View Progress button, etc. */}
		<button id="collapse-all">Collapse All</button>
		<button id="view-progress">View Progress</button>
		<button id="publish-all">Publish All</button>
		<button id="module">+ Module</button>
  
		<ul id="wd-modules">
		  {/* Week 1 */}
		  <li className="wd-module">
			<div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syallbus, Agenda</div>
			<ul className="wd-lessons">
			  {/* Lesson 1 */}
			  <li className="wd-lesson">
				<span className="wd-title">LEARNING OBJECTIVES</span>
				<ul className="wd-content">
				  <li className="wd-content-item">Introduction to the course</li>
				  <li className="wd-content-item">Learn what is Web Development</li>
				</ul>
			  </li>
			  {/* Reading */}
			  <li className="wd-lesson">
				<span className="wd-title">READING</span>
				<ul className="wd-content">
				  <li className="wd-content-item">Full Stack Developer - Chapter 1: Introduction</li>
				  <li className="wd-content-item">Full Stack Developer - Chapter 2: Creating User Interfaces with HTML</li>
				</ul>
			  </li>
			  {/* Slides */}
			  <li className="wd-lesson">
				<span className="wd-title">SLIDES</span>
				<ul className="wd-content">
				  <li className="wd-content-item">Introduction to Web Development</li>
				</ul>
			  </li>
			</ul>
		  </li>
  
		  {/* Week 2 */}
		  <li className="wd-module">
			<div className="wd-title">Week 1, Lecture 2- Formatting Userinterface with HTML</div>
			<ul className="wd-lessons">
			  {/* Lesson 1 */}
			  <li className="wd-lesson">
				<span className="wd-title">LEARNING OBJECTIVES</span>
				<ul className="wd-content">
				  <li className="wd-content-item">Introduction to HTML and the DOM</li>
				  <li className="wd-content-item">Creating an RTP Application with Node.js</li>
				</ul>
			  </li>
			  {/* Slides */}
			  <li className="wd-lesson">
				<span className="wd-title">SLIDES</span>
				<ul className="wd-content">
				  <li className="wd-content-item">Introduction to HTML and the DOM</li>
				  <li className="wd-content-item">Formatting content with List and Table tags</li>
				</ul>
			  </li>
			</ul>
		  </li>
		</ul>
	  </div>
	);
  }
  