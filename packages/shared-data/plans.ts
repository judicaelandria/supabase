export const plans = [
  {
    name: 'Free',
    nameBadge: '',
    costUnit: 'per month',
    href: 'https://supabase.com/dashboard/new/new-project',
    priceLabel: 'Starting from',
    priceMonthly: 0,
    warning: 'Limit of 2 free projects',
    description: 'Perfect for passion projects & simple websites.',
    preface: 'Get started with:',
    features: [
      'Social OAuth providers',
      'Up to 500MB database & 1GB file storage',
      'Up to 2GB bandwidth',
      'Up to 50MB file uploads',
      '50,000 monthly active users',
      'Up to 500K Edge Function invocations',
      '200 concurrent Realtime connections',
      '2 million Realtime messages',
      '1-day log retention',
      'Community support',
    ],
    scale: 'Free projects are paused after 1 week of inactivity.',

    cta: 'Get Started',
  },
  {
    name: 'Pro',
    nameBadge: '',
    costUnit: 'per month',
    href: 'https://supabase.com/dashboard/new/new-project',
    from: true,
    priceLabel: 'Starting from',
    warning: '+ usage',
    priceMonthly: 25,
    description: 'For production applications with the option to scale.',
    features: [
      'No project pausing',
      '8GB database & 100GB file storage',
      '50GB bandwidth',
      '5GB file uploads',
      '100,000 monthly active users',
      '2M Edge Function invocations',
      '500 concurrent Realtime connections',
      '5 million Realtime messages',
      '7-day log retention',
      'Email support',
      'Daily backups',
    ],
    scale: 'Additional fees apply for usage and storage beyond the limits above.',
    shutdown: '',
    preface: 'Everything in the Free plan, plus:',
    additional: '',
    cta: 'Get Started',
  },
  {
    name: 'Team',
    nameBadge: 'New',
    costUnit: 'per month',
    href: 'https://forms.supabase.com/team',
    from: true,
    priceLabel: 'Starting from',
    warning: '+ usage',
    priceMonthly: 599,
    description: 'Collaborate with different permissions and access patterns.',
    features: [
      'Organization member roles (ABAC)',
      'Standardised Security Questionnaire',
      'SOC2',
      'SSO for Supabase Dashboard',
      'Priority email support & SLAs',
      '14 day backups',
      '28 day log retention',
    ],
    scale: 'Additional fees apply for usage and storage beyond the limits above.',
    shutdown: '',
    preface: 'Everything in the Pro plan, plus:',
    additional: '',
    cta: 'Contact Us',
  },
  {
    name: 'Enterprise',
    href: 'https://forms.supabase.com/enterprise',
    description: 'For large-scale applications managing serious workloads.',
    features: [
      `Designated Support manager & SLAs`,
      `Enterprise OAuth providers`,
      `SSO/SAML`,
      `On-premise support`,
      `24×7×365 premium enterprise support`,
      `Private Slack channel`,
    ],
    priceLabel: '',
    priceMonthly: 'Contact us',
    preface: 'These apply to all projects within the organization:',
    scale: '',
    shutdown: '',
    cta: 'Contact Us',
  },
]
