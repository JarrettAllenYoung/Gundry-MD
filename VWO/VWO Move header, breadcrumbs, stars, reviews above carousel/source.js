/// VWO - BRP Superfood Beef PDP Move Header, breadcrumbs, stars +review above Carousel (SEO Impact)

/// Apply this to VWO - GMD Olive Oil PDP MOBILE ONLY Move Header, breadcrumbs, stars +review above Carousel (SEO Impact)

// JavaScript

/* CUSTOM CODE */
vwo_$(".gh-unicorn-breadcrumbs-desktop").each(function () {
	var destP = vwo_$("#top > div:nth-of-type(1) > div:nth-of-type(2)"),
		dest = vwo_$("#top > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(4)");
	if (dest.length)
		dest.append(this);
	else
		destP.append(this);
});
if(screen.width < 1024) {
    /* REARRANGE2 */
    vwo_$(".gh-unicorn-breadcrumbs-mobile").each(function () {
        var destP = vwo_$(".elementor-element-3506bcf"),
            dest = vwo_$(".elementor-widget-powerreviews-stars");
        if (dest.length)
            dest.append(this);
        else
            destP.before(this);
    });
    /* CUSTOM CODE */
    vwo_$(".elementor-element-3506bcf").each(function () {
        var dest = vwo_$(".elementor-widget-powerreviews-stars"),
            destP = vwo_$(".elementor-widget-offer-selector");
        if (dest.length)
            dest.append(this);
        else
            destP.before(this);
    });
}

/* CUSTOM CODE (NEW) */
vwo_$(".gh-unicorn-breadcrumbs-desktop").each(function () {
	var destP = vwo_$("#top > div:nth-of-type(1) > div:nth-of-type(2)"),
		dest = vwo_$("#top > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(4)");
	if (dest.length)
		dest.append(this);
	else
		destP.append(this);
});
if(screen.width < 1024) {
    /* REARRANGE2 */
    vwo_$(".gh-unicorn-breadcrumbs-mobile").each(function () {
        var destP = vwo_$(".elementor-element-378b155"),
            dest = vwo_$(".elementor-widget-powerreviews-stars");
        if (dest.length)
            dest.append(this);
        else
            destP.before(this);
    });
    /* CUSTOM CODE */
    vwo_$(".elementor-element-378b155").each(function () {
        var dest = vwo_$(".elementor-widget-powerreviews-stars"),
            destP = vwo_$(".elementor-widget-offer-selector");
        if (dest.length)
            dest.append(this);
        else
            destP.before(this);
    });
}


// CSS

.p-w-r .pr-snippet-stars-reco-inline.pr-snippet-compact .pr-snippet-stars-reco-reco {
    display: none;
}
@media screen and (max-width: 1024px) {
    .elementor-widget-powerreviews-stars .p-w-r {
        text-align: center;
    }
    .e-con .elementor-widget.elementor-widget.elementor-widget-breadcrumbs {
        text-align: center;
        margin-block-end: 10px;
    }
    .elementor-356110 .elementor-element.elementor-element-dbd74ba > .elementor-widget-container {
        margin: 0;
    }
    .gh-unicorn-offer-selector > div {
        padding-top: 20px;
    }
    .pr-snippet-reco-to-friend {
        display: none;
    }
    .p-w-r .pr-snippet-stars-reco-inline .pr-snippet-stars-reco-stars {
        float: unset !important;
    }
}





/// GPT
vwo_$(function () {
    function moveElement($element, $dest, $destP) {
        if ($element.length && ($dest.length || $destP.length)) {
            if ($dest.length) {
                $dest.append($element);
            } else if ($destP.length) {
                $destP.before($element);
            }
        }
    }
    function runRearrange() {
        // Desktop / default layout
        moveElement(
            vwo_$(".woocommerce-breadcrumb"),
            vwo_$("#top > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(4)"),
            vwo_$("#top > div:nth-of-type(1) > div:nth-of-type(2)")
        );
        // Mobile layout
        if (window.innerWidth < 767) {
            const $breadcrumb = vwo_$(".woocommerce-breadcrumb");
            const $stars = vwo_$(".elementor-widget-powerreviews-stars");
            const $breadcrumbParent = vwo_$(".elementor-element-e6386a9");
            const $starsParent = vwo_$(".elementor-widget-offer-selector");
            if ($breadcrumb.length && $stars.length) {
                $breadcrumbParent.before($breadcrumb);
                $breadcrumb.after($stars);
            } else {
                moveElement($breadcrumb, $breadcrumbParent, vwo_$(".elementor-widget-offer-selector"));
                moveElement($stars, $starsParent, $breadcrumbParent);
            }
        }
    }
    // Keep checking until both breadcrumb & stars are in DOM
    var checkInterval = setInterval(function () {
        if (vwo_$(".woocommerce-breadcrumb").length && vwo_$(".elementor-widget-powerreviews-stars").length) {
            clearInterval(checkInterval);
            runRearrange();
        }
    }, 200);
});
