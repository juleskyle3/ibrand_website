'use client';

export default function Team() {
  const team = [
    {
      name: 'Viola Koojo',
      role: 'Founder & Creative Director',
      bio: 'Visionary leader with passion for creative excellence.',
      emoji: '👩‍💼',
    },
    {
      name: 'Creative Team',
      role: 'Design & Branding',
      bio: 'Expert designers crafting beautiful brands.',
      emoji: '🎨',
    },
    {
      name: 'Production Team',
      role: 'Fabrication & Printing',
      bio: 'Skilled craftspeople bringing designs to life.',
      emoji: '🔧',
    },
    {
      name: 'Project Managers',
      role: 'Client Relations',
      bio: 'Dedicated professionals ensuring excellence.',
      emoji: '📋',
    },
    {
      name: 'Art Directors',
      role: 'Strategic Vision',
      bio: 'Creative minds shaping brand narratives.',
      emoji: '🎬',
    },
    {
      name: 'Quality Assurance',
      role: 'Excellence Standards',
      bio: 'Ensuring every project meets high standards.',
      emoji: '✓',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Talented professionals dedicated to delivering creative excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-red-600 transition-all duration-300 p-8 group transform hover:-translate-y-2"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 text-center">{member.emoji}</div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-1 group-hover:text-red-600 transition-colors">{member.name}</h3>
              <p className="text-center text-red-600 font-medium mb-3 group-hover:text-red-800 transition-colors">{member.role}</p>
              <p className="text-center text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
