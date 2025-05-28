export default function Issue22() {
  type LocalPost = {
    title: string;
    category: string;
    largeImg: string;
    smallImg: string;
    col: string;
    row: string;
  };

  const blogPosts: LocalPost[] = [
    {
      title: 'Design for the AI age',
      category: 'Craft',
      largeImg: 'https://webassets.linear.app/images/ornj730p/production/c89922234d326aa0e4cca6a4c98c8d6a4ebc4a51-1952x880.png?q=95&auto=format&dpr=2',
      smallImg: 'https://webassets.linear.app/images/ornj730p/production/62175a4eea5abef20b7338bcc6565876ce937416-467x492.jpg?w=128&q=95&auto=format&dpr=2',
      col: '',
      row: '',
    },
    {
      title: 'Building what customers need, not just what they ask for',
      category: 'Practices for product building',
      largeImg: 'https://webassets.linear.app/images/ornj730p/production/3ff0e2bba4019c425386694ccf2f6cc784acde56-8192x4320.png?q=95&auto=format&dpr=2',
      smallImg: 'https://webassets.linear.app/images/ornj730p/production/68f0fa2fb22a7212d2fbd09f12526e431ceae231-1634x1632.jpg?w=128&q=95&auto=format&dpr=2',
      col: '',
      row: '',
    },
    {
      title: 'The profitable startup',
      category: 'Company building',
      largeImg: 'https://webassets.linear.app/images/ornj730p/production/c530a9e8f766190899741232724fcd90f7dc8278-8192x3762.png?q=95&auto=format&dpr=2',
      smallImg: 'https://webassets.linear.app/images/ornj730p/production/62175a4eea5abef20b7338bcc6565876ce937416-467x492.jpg?w=128&q=95&auto=format&dpr=2',
      col: '',
      row: '',
    },
    {
      title: 'Why and how Scale migrated to Linear',
      category: 'Linear community',
      largeImg: 'https://webassets.linear.app/images/ornj730p/production/3e9aab2db7a451996d6797f6bb4b540085efa70e-2056x944.png?q=95&auto=format&dpr=2',
      smallImg: 'https://webassets.linear.app/images/ornj730p/production/3f60cfb6f9ba197974d1ff65bb52542c48e724a5-296x296.jpg?w=128&q=95&auto=format&dpr=2',
      col: '',
      row: '',
    },
    {
      title: 'Rethinking the startup MVP: Building a competitive product',
      category: 'Practices for product building',
      largeImg: 'https://webassets.linear.app/images/ornj730p/production/e14af344a4dd9ffd96c00bafecbf1cd2057639b9-4112x1888.png?q=95&auto=format&dpr=2',
      smallImg: 'https://webassets.linear.app/images/ornj730p/production/4d081a7a9ee2575014ab150f2d74cc3e2266a937-300x300.jpg?w=128&q=95&auto=format&dpr=2',
      col: '',
      row: '',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 space-y-6">
      {/* Primera fila: 2 elementos */}
      <div className="flex flex-col lg:flex-row gap-4 h-[400px] max-w-[1100px] mx-auto">
        <div className="flex-1">
          <a href="https://linear.app/blog/design-for-the-ai-age" className="block h-full">
            {renderPost(blogPosts[0])}
          </a>
        </div>
        <div className="flex-1">
          <a href="https://linear.app/blog/building-what-customers-need" className="block h-full">
            {renderPost(blogPosts[1])}
          </a>
        </div>
      </div>

      {/* Segunda fila: 3 elementos */}
      <div className="flex flex-col lg:flex-row gap-4 h-[300px] max-w-[1100px] mx-auto">
        <div className="flex-1">
          <a href="https://linear.app/blog/the-profitable-startup" className="block h-full">
            {renderPost(blogPosts[2])}
          </a>
        </div>
        <div className="flex-1">
          <a href="https://linear.app/blog/why-and-how-scale-migrated-to-linear" className="block h-full">
            {renderPost(blogPosts[3])}
          </a>
        </div>
        <div className="flex-1">
          <a href="https://linear.app/blog/rethinking-the-startup-mvp-building-a-competitive-product" className="block h-full">
            {renderPost(blogPosts[4])}
          </a>
        </div>
      </div>
    </div>
  );

  function renderPost(post: LocalPost) {
    return (
      <div className="relative overflow-hidden rounded-xl transition duration-300 hover:brightness-125 bg-zinc-900 w-full h-full">
        <img
          src={post.largeImg}
          alt=""
          className="w-full h-full object-cover absolute inset-0 opacity-60"
        />
        <div className="relative z-10 p-4 h-full flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
          <div className="flex items-center gap-2">
            <img src={post.smallImg} alt="avatar" className="w-8 h-8 rounded-full border border-white/20" />
            <span className="text-xs text-white/70">{post.category}</span>
          </div>
          <h3 className="text-lg font-semibold mt-2 leading-tight">
            {post.title}
          </h3>
        </div>
      </div>
    );
  }
}
