// Animation categories
export const categories = [
    'Entrance',
    'Exit',
    'Hover',
    'Loop',
    'Stagger',
    'Cards',
    'Buttons',
    'Icons',
    'Images',
    'Forms',
    'Loaders',
    'Page Transitions',
    'Modals',
] as const;

export type Category = (typeof categories)[number];

// Animation interface
export interface Animation {
    id: string;
    name: string;
    category: Category;
    description: string;
    component: string;
    code: string;
    props?: {
        name: string;
        type: string;
        default?: string;
        description: string;
    }[];
}

// Sample animations catalog
export const animations: Animation[] = [
    {
        id: 'fade-in-up',
        name: 'Fade In Up',
        category: 'Entrance',
        description: 'Smoothly fades in while sliding up from below',
        component: 'FadeInUp',
        code: `<FadeInUp duration={0.6}>
  <div>Your content here</div>
</FadeInUp>`,
        props: [
            { name: 'duration', type: 'number', default: '0.5', description: 'Animation duration in seconds' },
            { name: 'delay', type: 'number', default: '0', description: 'Delay before animation starts' },
        ],
    },
    {
        id: 'slide-in-left',
        name: 'Slide In Left',
        category: 'Entrance',
        description: 'Slides in from the left side',
        component: 'SlideIn',
        code: `<SlideIn direction="left" duration={0.5}>
  <div>Your content here</div>
</SlideIn>`,
        props: [
            { name: 'direction', type: '"left" | "right" | "up" | "down"', default: '"left"', description: 'Direction of slide' },
            { name: 'duration', type: 'number', default: '0.5', description: 'Animation duration' },
        ],
    },
    {
        id: 'scale-in',
        name: 'Scale In',
        category: 'Entrance',
        description: 'Scales up from a smaller size',
        component: 'ScaleIn',
        code: `<ScaleIn duration={0.4}>
  <div>Your content here</div>
</ScaleIn>`,
    },
    {
        id: 'bounce-in',
        name: 'Bounce In',
        category: 'Entrance',
        description: 'Bounces in with elastic easing',
        component: 'BounceIn',
        code: `<BounceIn>
  <div>Your content here</div>
</BounceIn>`,
    },
    {
        id: 'fade-out',
        name: 'Fade Out',
        category: 'Exit',
        description: 'Smoothly fades out',
        component: 'FadeOut',
        code: `<FadeOut duration={0.3}>
  <div>Your content here</div>
</FadeOut>`,
    },
    {
        id: 'slide-out-right',
        name: 'Slide Out Right',
        category: 'Exit',
        description: 'Slides out to the right',
        component: 'SlideOut',
        code: `<SlideOut direction="right">
  <div>Your content here</div>
</SlideOut>`,
    },
    {
        id: 'hover-lift',
        name: 'Hover Lift',
        category: 'Hover',
        description: 'Lifts element on hover',
        component: 'HoverLift',
        code: `<HoverLift>
  <button>Hover me</button>
</HoverLift>`,
    },
    {
        id: 'hover-scale',
        name: 'Hover Scale',
        category: 'Hover',
        description: 'Scales element on hover',
        component: 'HoverScale',
        code: `<HoverScale scale={1.05}>
  <div>Hover me</div>
</HoverScale>`,
    },
    {
        id: 'pulse',
        name: 'Pulse',
        category: 'Loop',
        description: 'Continuous pulsing animation',
        component: 'Pulse',
        code: `<Pulse>
  <div>Pulsing element</div>
</Pulse>`,
    },
    {
        id: 'rotate',
        name: 'Rotate',
        category: 'Loop',
        description: 'Continuous rotation',
        component: 'Rotate',
        code: `<Rotate speed={2}>
  <div>Rotating element</div>
</Rotate>`,
    },
    {
        id: 'stagger-children',
        name: 'Stagger Children',
        category: 'Stagger',
        description: 'Animates children with staggered delay',
        component: 'StaggerChildren',
        code: `<StaggerChildren staggerDelay={0.1}>
  <div>Child 1</div>
  <div>Child 2</div>
  <div>Child 3</div>
</StaggerChildren>`,
    },
    {
        id: 'card-flip',
        name: 'Card Flip',
        category: 'Cards',
        description: '3D card flip animation',
        component: 'CardFlip',
        code: `<CardFlip>
  <div>Front</div>
  <div>Back</div>
</CardFlip>`,
    },
    {
        id: 'button-ripple',
        name: 'Button Ripple',
        category: 'Buttons',
        description: 'Material design ripple effect',
        component: 'ButtonRipple',
        code: `<ButtonRipple>
  <button>Click me</button>
</ButtonRipple>`,
    },
    {
        id: 'spinner',
        name: 'Spinner',
        category: 'Loaders',
        description: 'Loading spinner animation',
        component: 'Spinner',
        code: `<Spinner size="md" color="primary" />`,
    },
    {
        id: 'skeleton',
        name: 'Skeleton',
        category: 'Loaders',
        description: 'Skeleton loading animation',
        component: 'Skeleton',
        code: `<Skeleton width="100%" height="20px" />`,
    },
    {
        id: 'page-fade',
        name: 'Page Fade',
        category: 'Page Transitions',
        description: 'Smooth page transition fade',
        component: 'PageFade',
        code: `<PageFade>
  <YourPage />
</PageFade>`,
    },
    {
        id: 'modal-slide',
        name: 'Modal Slide',
        category: 'Modals',
        description: 'Modal slide in from bottom',
        component: 'ModalSlide',
        code: `<ModalSlide isOpen={isOpen}>
  <div>Modal content</div>
</ModalSlide>`,
    },
];

// Get animations by category
export function getAnimationsByCategory(category: Category): Animation[] {
    return animations.filter((anim) => anim.category === category);
}

// Get animation by ID
export function getAnimationById(id: string): Animation | undefined {
    return animations.find((anim) => anim.id === id);
}

// Search animations
export function searchAnimations(query: string): Animation[] {
    const lowerQuery = query.toLowerCase();
    return animations.filter(
        (anim) =>
            anim.name.toLowerCase().includes(lowerQuery) ||
            anim.description.toLowerCase().includes(lowerQuery) ||
            anim.category.toLowerCase().includes(lowerQuery)
    );
}
