import '../styles/Github.css'

const GITHUB_USERNAME = 'yourusername' // ← Change this to your GitHub username

export default function Github() {
  return (
    <section className="github" id="github">
      <div className="container">
        <p className="section-label">Open Source</p>
        <h2 className="section-title">GitHub Activity</h2>

        <div className="github-stats">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=16161f&title_color=7c6aff&icon_color=7c6aff&text_color=e8e8f0`}
            alt="GitHub Stats"
            className="github-card"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=16161f&title_color=7c6aff&text_color=e8e8f0`}
            alt="Top Languages"
            className="github-card"
          />
        </div>

        <div className="github-streak">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true&background=16161f&stroke=7c6aff&ring=7c6aff&fire=ff6b6b&currStreakLabel=7c6aff`}
            alt="GitHub Streak"
            className="github-streak-img"
          />
        </div>
      </div>
    </section>
  )
}