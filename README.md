# Sarn Consulting - Modern Business Consulting Platform 🌐

**Sarn consulting website built with Next.js 14, React 18, and Sanity CMS**  
*Delivering lightning-fast Tax solutions For all your finances*

## 🚀 Key Features
- **Next.js 14 App Router** with React Server Components (RSC) for optimal performance
- **Sanity CMS Integration** for seamless content management of:
  - Service offerings & case studies
  - Team member profiles & expertise
  - Blog articles & industry insights
  - Client testimonials & success metrics
- **Dynamic Page Routing** with SSG (Static Site Generation) for marketing content
- **Rich Text Editor** integration for polished content authoring
- **SEO-optimized** architecture with schema.org structured data
- **Contact API** with serverless backend for lead generation
- **Performance-first** approach (Lighthouse score >95)

## 💻 Tech Stack
- **Frontend**: 
  - Next.js 14 (App Router)
  - React 18 (Server Components)
  - TypeScript
  - Tailwind CSS + Framer Motion
- **Backend**:
  - Sanity CMS (GROQ queries)
  - Vercel Serverless Functions
- **Tooling**:
  - Zod for schema validation
  - ESLint + Prettier
  - GitHub Actions CI/CD

## 🔧 Installation
```bash
# Clone repository
git clone https://github.com/ASK-Baloch/sarn-consulting.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

Add your Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 🛠️ Development
```bash
# Run development server
npm run dev

# Start Sanity Studio
cd studio && npm run dev
```

## 🌐 Live Demos
- Production Site: [sarn-consulting.com](https://sarn-consulting.com)
- Sanity Studio: [studio.sarn-consulting.com](https://studio.sarn-consulting.com)

## 📚 Why This Stack?
- **Next.js 14**: Enables hybrid static & server rendering for marketing content
- **Sanity CMS**: Allows non-technical staff to manage complex content structures
- **Vercel Hosting**: Guarantees 99.99% uptime for critical business operations
- **Type Safety**: Reduces runtime errors in financial calculations and data presentation

## 📄 License
MIT Licensed. See [LICENSE](LICENSE) for details.

---

This description:
1. Highlights key technical differentiators
2. Shows modern architecture choices
3. Provides clear setup instructions
4. Demonstrates business value
5. Maintains professional tone for enterprise clients

Would you like me to emphasize any particular aspect or add specific metrics?
