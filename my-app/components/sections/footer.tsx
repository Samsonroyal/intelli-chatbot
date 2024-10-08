import Image from 'next/image'

const navigation = {
  connect: [
    { name: 'Book A Demo', href: 'https://calendly.com/sila-r0a9/30min' },
    {
      name: 'Twitter',
      href: 'https://twitter.com/Intelli',
    },
    {
      name: 'Github',
      href: 'https://github.com/Sqweya-AI',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/intelli-concierge',
    },
  ],
  company: [
    { name: 'Terms Of Service', href: '/terms-of-service' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Partner', href: '/partner' },
    { name: 'AI For Enterprise', href: '/enterprise' },
  ],
}

const TwoColumnFooter = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter py-12"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-8">
            <Image height={25} width={25} src="https://www.intelliconcierge.com/Intelli.svg" alt="Intelli logo" className="h-7 w-auto" />
            <p className="text-md max-w-xs leading-6 text-gray-700">
              Put your customer support - on autopilot
            </p>
            <div className="flex space-x-6 text-sm text-gray-700">
              <div>Made with ❤️ from SF.</div>
            </div>
          </div>
          {/* Navigations */}
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
            <div className="md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                Connect
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6 text-gray-700 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <div className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-700 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-700">
            &copy; 2024 Intelli Concierge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default TwoColumnFooter