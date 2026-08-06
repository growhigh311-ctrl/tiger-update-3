import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { WA_LINK } from '@/components/constants';

export const metadata: Metadata = {
  title: 'Ultimate Cricket Guide for Beginners | Rules, Formats & Stats',
  description: 'Learn cricket from the basics. Understand rules, formats, scorecards, fielding positions, pitch reports, player statistics, and match analysis in one guide.',
};

export default function UltimateCricketGuidePage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Info banner */}
      <div className="w-full bg-blue-950/60 border-b border-blue-500/20 py-2 px-4 text-center">
        <p className="text-xs text-blue-300/80">
          <span className="font-semibold">Note:</span> tiger365cricket.com is an informational website only and does not offer betting services.
        </p>
      </div>

      <Navbar />

      <article className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium mb-8 transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20">
                Beginner Guide
              </span>
              <span className="text-gray-500 text-xs">8 min read</span>
              <span className="text-gray-500 text-xs">•</span>
              <span className="text-gray-500 text-xs">August 6, 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
              The Ultimate Cricket Guide for Beginners: Rules, Formats, Statistics & Match Analysis
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-amber-400 rounded-full mb-8"></div>
          </header>

          {/* Feature/Emoji banner */}
          <div className="bg-gradient-to-r from-blue-900/30 to-black border border-gray-800 rounded-3xl p-12 text-center text-7xl mb-10 shadow-2xl">
            🏏
          </div>

          {/* Body and Sidebar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 text-gray-300 leading-relaxed text-base sm:text-lg">
              <div className="prose prose-invert max-w-none">
                <p className="mb-6">Cricket is one of the world&apos;s most popular sports, enjoyed by millions of fans across every continent. Whether you&apos;re watching your first match or looking to deepen your understanding of the game, learning the basics can make every match more exciting.</p>

                <p className="mb-6">This guide explains cricket in simple language—from formats and rules to scorecards, fielding positions, pitch reports, and player statistics.</p>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">What Is Cricket?</h3>
                <p className="mb-6">Cricket is a bat-and-ball sport played between two teams of eleven players. One team bats while the other bowls and fields. The batting team tries to score as many runs as possible, while the bowling team aims to dismiss batters and limit runs.</p>
                <p className="mb-6">The team with the higher score at the end of the match wins.</p>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">Different Formats of Cricket</h3>
                
                <h4 className="text-xl font-bold text-white mt-6 mb-2">Test Cricket</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Played over five days</li>
                  <li>Two innings per team</li>
                  <li>Focuses on endurance, patience, and strategy</li>
                </ul>

                <h4 className="text-xl font-bold text-white mt-6 mb-2">One Day International (ODI)</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>50 overs per side</li>
                  <li>Usually completed in one day</li>
                  <li>Balances aggressive and defensive play</li>
                </ul>

                <h4 className="text-xl font-bold text-white mt-6 mb-2">Twenty20 (T20)</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>20 overs per side</li>
                  <li>Fast-paced and entertaining</li>
                  <li>Encourages attacking batting and innovative bowling</li>
                </ul>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">Basic Rules Every Fan Should Know</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Each over consists of six legal deliveries.</li>
                  <li>Four runs are scored when the ball reaches the boundary after touching the ground.</li>
                  <li>Six runs are scored when the ball clears the boundary without bouncing.</li>
                  <li>A batter can be dismissed in several ways, including bowled, caught, run out, LBW, and stumped.</li>
                </ul>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">Understanding a Cricket Scorecard</h3>
                <p className="mb-4">A scorecard typically includes:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Total runs</li>
                  <li>Wickets lost</li>
                  <li>Overs played</li>
                  <li>Individual batting scores</li>
                  <li>Bowling figures</li>
                  <li>Extras</li>
                  <li>Run rate</li>
                </ul>
                <p className="mb-6">Reading the scorecard helps you understand how the match is progressing.</p>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">Cricket Fielding Positions</h3>
                <p className="mb-4">Some common fielding positions include:</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Slip</li>
                    <li>Gully</li>
                    <li>Point</li>
                    <li>Cover</li>
                    <li>Mid-off</li>
                    <li>Mid-on</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Square Leg</li>
                    <li>Fine Leg</li>
                    <li>Third Man</li>
                    <li>Long-on</li>
                    <li>Long-off</li>
                    <li>Deep Midwicket</li>
                  </ul>
                </div>
                <p className="mb-6">Captains adjust these positions depending on the match situation and the batter&apos;s strengths.</p>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">What Is a Powerplay?</h3>
                <p className="mb-6">A powerplay is a phase during limited-overs cricket where restrictions are placed on the number of fielders allowed outside the inner circle.</p>
                <p className="mb-6">Powerplays often encourage aggressive batting while requiring bowlers to maintain discipline.</p>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">What Is the DLS Method?</h3>
                <p className="mb-4">The Duckworth–Lewis–Stern (DLS) Method is used in rain-affected limited-overs matches.</p>
                <p className="mb-4">It calculates revised targets based on:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Overs remaining</li>
                  <li>Wickets in hand</li>
                  <li>Match interruptions</li>
                </ul>
                <p className="mb-6">The aim is to produce a fair result when weather shortens a game.</p>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">Understanding Player Statistics</h3>
                <p className="mb-4">Common statistics include:</p>
                
                <h4 className="text-xl font-bold text-white mt-6 mb-2">Batting</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Runs</li>
                  <li>Batting Average</li>
                  <li>Strike Rate</li>
                  <li>Centuries</li>
                  <li>Half-centuries</li>
                </ul>

                <h4 className="text-xl font-bold text-white mt-6 mb-2">Bowling</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Wickets</li>
                  <li>Economy Rate</li>
                  <li>Bowling Average</li>
                  <li>Strike Rate</li>
                </ul>

                <h4 className="text-xl font-bold text-white mt-6 mb-2">Fielding</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Catches</li>
                  <li>Run Outs</li>
                  <li>Stumpings</li>
                </ul>
                <p className="mb-6">These statistics help fans evaluate player performance over time.</p>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">Why Pitch Reports Matter</h3>
                <p className="mb-4">The pitch can influence how a match unfolds.</p>
                
                <h4 className="text-xl font-bold text-white mt-6 mb-2">Batting-Friendly Pitch</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Good bounce</li>
                  <li>Easier stroke play</li>
                  <li>High-scoring matches</li>
                </ul>

                <h4 className="text-xl font-bold text-white mt-6 mb-2">Bowling-Friendly Pitch</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>More seam movement</li>
                  <li>Extra swing</li>
                  <li>Lower scores</li>
                </ul>

                <h4 className="text-xl font-bold text-white mt-6 mb-2">Spin-Friendly Pitch</h4>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Assists spin bowlers</li>
                  <li>Ball turns sharply</li>
                  <li>Middle overs become important</li>
                </ul>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">Weather and Cricket</h3>
                <p className="mb-4">Weather conditions affect:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Swing bowling</li>
                  <li>Dew factor</li>
                  <li>Spin effectiveness</li>
                  <li>Outfield speed</li>
                  <li>Visibility</li>
                </ul>
                <p className="mb-6">Checking the weather forecast before a match provides useful context for understanding how conditions may influence play.</p>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">How Team Selection Works</h3>
                <p className="mb-4">Teams consider several factors:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Player fitness</li>
                  <li>Recent form</li>
                  <li>Opposition strengths</li>
                  <li>Pitch conditions</li>
                  <li>Weather</li>
                  <li>Match format</li>
                </ul>
                <p className="mb-6">Selecting the right balance between batters, bowlers, wicketkeepers, and all-rounders is an important strategic decision.</p>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">Understanding Cricket Rankings</h3>
                <p className="mb-4">International rankings are maintained separately for:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Test cricket</li>
                  <li>ODI cricket</li>
                  <li>T20 International cricket</li>
                </ul>
                <p className="mb-6">Players are also ranked individually as batters, bowlers, and all-rounders based on their performances.</p>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">Cricket Terms Every Beginner Should Know</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Over</li>
                    <li>Maiden Over</li>
                    <li>Yorker</li>
                    <li>Bouncer</li>
                    <li>Googly</li>
                    <li>Doosra</li>
                    <li>Reverse Swing</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Hat-trick</li>
                    <li>Century</li>
                    <li>Half-century</li>
                    <li>Duck</li>
                    <li>Follow-on</li>
                    <li>Run Rate</li>
                    <li>Net Run Rate</li>
                  </ul>
                </div>
                <p className="mb-6">Learning these terms makes commentary much easier to follow.</p>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">Tips for New Cricket Fans</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Watch different match formats.</li>
                  <li>Learn the basic rules first.</li>
                  <li>Read scorecards after matches.</li>
                  <li>Follow player statistics.</li>
                  <li>Watch expert analysis.</li>
                  <li>Observe captaincy decisions and field placements.</li>
                </ul>
                <p className="mb-6">The more matches you watch, the easier it becomes to understand the tactical side of the game.</p>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-white mt-10 mb-4 border-b border-gray-800 pb-2">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-blue-400 mb-1">Which cricket format is best for beginners?</h4>
                    <p className="text-gray-300">T20 is often the easiest format for new viewers because matches are shorter and faster-paced.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-400 mb-1">Why are pitch reports important?</h4>
                    <p className="text-gray-300">Pitch conditions influence batting, bowling, and overall match strategy.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-400 mb-1">What does strike rate mean?</h4>
                    <p className="text-gray-300">For batters, strike rate measures how quickly they score runs. For bowlers, it measures how frequently they take wickets.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-400 mb-1">Why do captains change field placements?</h4>
                    <p className="text-gray-300">Field placements are adjusted to match the batter&apos;s strengths, bowling style, and match situation.</p>
                  </div>
                </div>

                <hr className="border-gray-800 my-8" />

                <h3 className="text-2xl font-bold text-blue-500 mt-8 mb-4">Final Thoughts</h3>
                <p className="mb-6">Cricket is a sport that combines skill, strategy, teamwork, and excitement. Understanding the rules, formats, player statistics, pitch conditions, and match tactics can greatly enhance your enjoyment of the game.</p>
                <p className="mb-6">Whether you&apos;re watching Test cricket, ODIs, or T20 matches, learning these fundamentals will help you appreciate the decisions players and captains make throughout every match.</p>
                <p className="mb-6">Visit <a href="https://tiger365cricket.com" className="text-blue-400 hover:underline">tiger365cricket.com</a> for more info.</p>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-[#111111] border border-blue-500/20 rounded-2xl p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-3 block">🐯</span>
                  <h3 className="text-xl font-bold text-white mb-2">Get Your Cricket ID</h3>
                  <p className="text-xs text-gray-400">Join India&apos;s most trusted gaming exchange platform. 24/7 service.</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>100% Trusted & Secure</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>Instant Refills & Cashout</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span>24/7 WhatsApp Support</span>
                  </div>
                </div>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue flex items-center justify-center gap-2 text-white font-bold py-3.5 px-6 rounded-full text-sm uppercase tracking-wider w-full text-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Get ID Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
