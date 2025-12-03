// Animation categories
export const categories = [
    'Interactive',
    'Entrance',
    'Exit',
    'Hover',
    'Text',
    'Cards',
    'Buttons',
    'Icons',
    'Images',
    'Loaders',
    'Page Transitions',
    'Modals',
    'Stagger',
    'Scroll',
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
    previewType?: 'box' | 'text' | 'button' | 'card' | 'list' | 'modal' | 'icon' | 'custom' | 'interactive' | 'image';
    props?: {
        name: string;
        type: string;
        default?: string;
        description: string;
    }[];
}

// Sample animations catalog
export const animations: Animation[] = [
    // Interactive
    {
        id: 'magnetic',
        name: 'Magnetic',
        category: 'Interactive',
        description: 'Element follows cursor movement magnetically',
        component: 'Magnetic',
        previewType: 'interactive',
        code: `<Magnetic>
  <button>Hover Me</button>
</Magnetic>`,
    },
    {
        id: 'cursor-follow',
        name: 'Cursor Follow',
        category: 'Interactive',
        description: 'Element follows the cursor position',
        component: 'CursorFollow',
        previewType: 'interactive',
        code: `<CursorFollow>
  <div className="w-4 h-4 bg-primary rounded-full" />
</CursorFollow>`,
    },
    {
        id: 'tilt-3d',
        name: 'Tilt 3D',
        category: 'Interactive',
        description: '3D tilt effect on hover',
        component: 'Tilt3D',
        previewType: 'interactive',
        code: `<Tilt3D>
  <Card>Hover to Tilt</Card>
</Tilt3D>`,
    },
    {
        id: 'draggable-snap',
        name: 'Draggable Snap',
        category: 'Interactive',
        description: 'Draggable element that snaps to position',
        component: 'DraggableSnap',
        previewType: 'interactive',
        code: `<DraggableSnap>
  <div>Drag Me</div>
</DraggableSnap>`,
    },
    {
        id: 'hover-glow-effect',
        name: 'Hover Glow Effect',
        category: 'Interactive',
        description: 'Glowing effect that follows cursor on hover',
        component: 'HoverGlowEffect',
        previewType: 'interactive',
        code: `<HoverGlowEffect>
  <Card>Hover for Glow</Card>
</HoverGlowEffect>`,
    },

    // Entrance
    {
        id: 'fade-in',
        name: 'Fade In',
        category: 'Entrance',
        description: 'Smooth fade in animation',
        component: 'FadeIn',
        previewType: 'box',
        code: `<FadeIn>
  <div>Content</div>
</FadeIn>`,
    },
    {
        id: 'fade-in-up',
        name: 'Fade In Up',
        category: 'Entrance',
        description: 'Fades in while sliding up',
        component: 'FadeInUp',
        previewType: 'box',
        code: `<FadeInUp>
  <div>Content</div>
</FadeInUp>`,
    },
    {
        id: 'slide-in-left',
        name: 'Slide In Left',
        category: 'Entrance',
        description: 'Slides in from the left',
        component: 'SlideIn',
        previewType: 'box',
        code: `<SlideIn direction="left">
  <div>Content</div>
</SlideIn>`,
    },
    {
        id: 'scale-in',
        name: 'Scale In',
        category: 'Entrance',
        description: 'Scales up from zero',
        component: 'ScaleIn',
        previewType: 'box',
        code: `<ScaleIn>
  <div>Content</div>
</ScaleIn>`,
    },
    {
        id: 'pop-in',
        name: 'Pop In',
        category: 'Entrance',
        description: 'Pops in with a bounce',
        component: 'PopIn',
        previewType: 'box',
        code: `<PopIn>
  <div>Content</div>
</PopIn>`,
    },
    {
        id: 'blur-in',
        name: 'Blur In',
        category: 'Entrance',
        description: 'Unblurs while fading in',
        component: 'BlurIn',
        previewType: 'box',
        code: `<BlurIn>
  <div>Content</div>
</BlurIn>`,
    },
    {
        id: 'rotate-in',
        name: 'Rotate In',
        category: 'Entrance',
        description: 'Rotates while fading in',
        component: 'RotateIn',
        previewType: 'box',
        code: `<RotateIn>
  <div>Content</div>
</RotateIn>`,
    },
    {
        id: 'flip-in-x',
        name: 'Flip In X',
        category: 'Entrance',
        description: 'Flips in on the X axis',
        component: 'FlipInX',
        previewType: 'box',
        code: `<FlipInX>
  <div>Content</div>
</FlipInX>`,
    },
    {
        id: 'flip-in-y',
        name: 'Flip In Y',
        category: 'Entrance',
        description: 'Flips in on the Y axis',
        component: 'FlipInY',
        previewType: 'box',
        code: `<FlipInY>
  <div>Content</div>
</FlipInY>`,
    },
    {
        id: 'drop-in',
        name: 'Drop In',
        category: 'Entrance',
        description: 'Drops in from above with bounce',
        component: 'DropIn',
        previewType: 'box',
        code: `<DropIn>
  <div>Content</div>
</DropIn>`,
    },

    // Exit
    {
        id: 'fade-out',
        name: 'Fade Out',
        category: 'Exit',
        description: 'Smooth fade out',
        component: 'FadeOut',
        previewType: 'box',
        code: `<FadeOut>
  <div>Content</div>
</FadeOut>`,
    },
    {
        id: 'slide-out-right',
        name: 'Slide Out Right',
        category: 'Exit',
        description: 'Slides out to the right',
        component: 'SlideOut',
        previewType: 'box',
        code: `<SlideOut direction="right">
  <div>Content</div>
</SlideOut>`,
    },
    {
        id: 'scale-down',
        name: 'Scale Down',
        category: 'Exit',
        description: 'Scales down to zero',
        component: 'ScaleDown',
        previewType: 'box',
        code: `<ScaleDown>
  <div>Content</div>
</ScaleDown>`,
    },
    {
        id: 'collapse-out',
        name: 'Collapse Out',
        category: 'Exit',
        description: 'Collapses height to zero',
        component: 'CollapseOut',
        previewType: 'box',
        code: `<CollapseOut>
  <div>Content</div>
</CollapseOut>`,
    },

    // Hover
    {
        id: 'hover-lift',
        name: 'Hover Lift',
        category: 'Hover',
        description: 'Lifts element on hover',
        component: 'HoverLift',
        previewType: 'card',
        code: `<HoverLift>
  <Card>Hover Me</Card>
</HoverLift>`,
    },
    {
        id: 'hover-scale',
        name: 'Hover Scale',
        category: 'Hover',
        description: 'Scales element on hover',
        component: 'HoverScale',
        previewType: 'card',
        code: `<HoverScale>
  <Card>Hover Me</Card>
</HoverScale>`,
    },
    {
        id: 'hover-glow',
        name: 'Hover Glow',
        category: 'Hover',
        description: 'Adds a glow effect on hover',
        component: 'HoverGlow',
        previewType: 'card',
        code: `<HoverGlow>
  <Card>Hover Me</Card>
</HoverGlow>`,
    },
    {
        id: 'hover-rotate',
        name: 'Hover Rotate',
        category: 'Hover',
        description: 'Rotates element on hover',
        component: 'HoverRotate',
        previewType: 'card',
        code: `<HoverRotate>
  <Card>Hover Me</Card>
</HoverRotate>`,
    },
    {
        id: 'hover-tilt',
        name: 'Hover Tilt',
        category: 'Hover',
        description: 'Tilts element on hover',
        component: 'HoverTilt',
        previewType: 'card',
        code: `<HoverTilt>
  <Card>Hover Me</Card>
</HoverTilt>`,
    },

    // Text
    {
        id: 'hero-text-reveal',
        name: 'Hero Text Reveal',
        category: 'Text',
        description: 'Reveals text character by character',
        component: 'HeroTextReveal',
        previewType: 'text',
        code: `<HeroTextReveal text="Amazing Text" />`,
    },
    {
        id: 'fade-item',
        name: 'Fade Item',
        category: 'Text',
        description: 'Fades in text items',
        component: 'FadeItem',
        previewType: 'text',
        code: `<FadeItem>Text Item</FadeItem>`,
    },

    // Cards
    {
        id: 'card-flip',
        name: 'Card Flip',
        category: 'Cards',
        description: '3D card flip animation',
        component: 'CardFlip',
        previewType: 'custom',
        code: `<CardFlip>
  <div>Front</div>
  <div>Back</div>
</CardFlip>`,
    },
    {
        id: 'card-hover-lift',
        name: 'Card Hover Lift',
        category: 'Cards',
        description: 'Lifts card on hover',
        component: 'CardHoverLift',
        previewType: 'card',
        code: `<CardHoverLift>
  <Card>Content</Card>
</CardHoverLift>`,
    },
    {
        id: 'card-hover-glow',
        name: 'Card Hover Glow',
        category: 'Cards',
        description: 'Card glows on hover',
        component: 'CardHoverGlow',
        previewType: 'card',
        code: `<CardHoverGlow>
  <Card>Content</Card>
</CardHoverGlow>`,
    },

    // Buttons
    {
        id: 'button-ripple',
        name: 'Button Ripple',
        category: 'Buttons',
        description: 'Ripple effect on click',
        component: 'ButtonRipple',
        previewType: 'button',
        code: `<ButtonRipple>
  <Button>Click Me</Button>
</ButtonRipple>`,
    },
    {
        id: 'button-glow',
        name: 'Button Glow',
        category: 'Buttons',
        description: 'Glowing button animation',
        component: 'ButtonGlow',
        previewType: 'button',
        code: `<ButtonGlow>
  <Button>Glow</Button>
</ButtonGlow>`,
    },
    {
        id: 'button-hover-pop',
        name: 'Button Hover Pop',
        category: 'Buttons',
        description: 'Button pops on hover',
        component: 'ButtonHoverPop',
        previewType: 'button',
        code: `<ButtonHoverPop>
  <Button>Pop</Button>
</ButtonHoverPop>`,
    },
    {
        id: 'button-shake',
        name: 'Button Shake',
        category: 'Buttons',
        description: 'Shakes button on interaction',
        component: 'ButtonShake',
        previewType: 'button',
        code: `<ButtonShake>
  <Button>Shake</Button>
</ButtonShake>`,
    },

    // Icons
    {
        id: 'icon-pulse',
        name: 'Icon Pulse',
        category: 'Icons',
        description: 'Pulsing icon animation',
        component: 'IconPulse',
        previewType: 'icon',
        code: `<IconPulse>
  <Icon />
</IconPulse>`,
    },
    {
        id: 'icon-spin',
        name: 'Icon Spin',
        category: 'Icons',
        description: 'Spinning icon animation',
        component: 'IconSpin',
        previewType: 'icon',
        code: `<IconSpin>
  <Icon />
</IconSpin>`,
    },
    {
        id: 'icon-bounce',
        name: 'Icon Bounce',
        category: 'Icons',
        description: 'Bouncing icon animation',
        component: 'IconBounce',
        previewType: 'icon',
        code: `<IconBounce>
  <Icon />
</IconBounce>`,
    },

    // Images
    {
        id: 'image-fade-in',
        name: 'Image Fade In',
        category: 'Images',
        description: 'Smooth image fade in',
        component: 'ImageFadeIn',
        previewType: 'image',
        code: `<ImageFadeIn src="..." />`,
    },
    {
        id: 'image-zoom-hover',
        name: 'Image Zoom Hover',
        category: 'Images',
        description: 'Zooms image on hover',
        component: 'ImageZoomOnHover',
        previewType: 'image',
        code: `<ImageZoomOnHover src="..." />`,
    },
    {
        id: 'image-tilt',
        name: 'Image Tilt',
        category: 'Images',
        description: 'Tilts image on hover',
        component: 'ImageTilt',
        previewType: 'image',
        code: `<ImageTilt src="..." />`,
    },

    // Loaders
    {
        id: 'loader-spin',
        name: 'Loader Spin',
        category: 'Loaders',
        description: 'Spinning loader',
        component: 'LoaderSpin',
        previewType: 'icon',
        code: `<LoaderSpin />`,
    },
    {
        id: 'loader-pulse',
        name: 'Loader Pulse',
        category: 'Loaders',
        description: 'Pulsing loader',
        component: 'LoaderPulse',
        previewType: 'icon',
        code: `<LoaderPulse />`,
    },
    {
        id: 'loader-wave',
        name: 'Loader Wave',
        category: 'Loaders',
        description: 'Wave loading animation',
        component: 'LoaderWave',
        previewType: 'custom',
        code: `<LoaderWave />`,
    },

    // Page Transitions
    {
        id: 'page-fade',
        name: 'Page Fade',
        category: 'Page Transitions',
        description: 'Fade transition for pages',
        component: 'PageFade',
        previewType: 'box',
        code: `<PageFade>
  <Page />
</PageFade>`,
    },
    {
        id: 'page-slide-left',
        name: 'Page Slide Left',
        category: 'Page Transitions',
        description: 'Slide left transition',
        component: 'PageSlideLeft',
        previewType: 'box',
        code: `<PageSlideLeft>
  <Page />
</PageSlideLeft>`,
    },

    // Modals
    {
        id: 'modal-fade-in',
        name: 'Modal Fade In',
        category: 'Modals',
        description: 'Fade in animation for modals',
        component: 'ModalFadeIn',
        previewType: 'modal',
        code: `<ModalFadeIn>
  <ModalContent />
</ModalFadeIn>`,
    },
    {
        id: 'modal-slide-up',
        name: 'Modal Slide Up',
        category: 'Modals',
        description: 'Slide up animation for modals',
        component: 'ModalSlideUp',
        previewType: 'modal',
        code: `<ModalSlideUp>
  <ModalContent />
</ModalSlideUp>`,
    },
    {
        id: 'modal-pop-in',
        name: 'Modal Pop In',
        category: 'Modals',
        description: 'Pop in animation for modals',
        component: 'ModalPopIn',
        previewType: 'modal',
        code: `<ModalPopIn>
  <ModalContent />
</ModalPopIn>`,
    },

    // Stagger
    {
        id: 'stagger-container',
        name: 'Stagger Container',
        category: 'Stagger',
        description: 'Container for staggered children',
        component: 'StaggerContainer',
        previewType: 'list',
        code: `<StaggerContainer>
  <Item />
  <Item />
</StaggerContainer>`,
    },
    {
        id: 'cascade-fade',
        name: 'Cascade Fade',
        category: 'Stagger',
        description: 'Cascading fade effect',
        component: 'CascadeFade',
        previewType: 'list',
        code: `<CascadeFade>
  <Item />
  <Item />
</CascadeFade>`,
    },

    // Scroll
    {
        id: 'scroll-reveal',
        name: 'Scroll Reveal',
        category: 'Scroll',
        description: 'Reveals element on scroll',
        component: 'ScrollReveal',
        previewType: 'box',
        code: `<ScrollReveal>
  <div>Content</div>
</ScrollReveal>`,
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
