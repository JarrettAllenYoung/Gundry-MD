
    (function(e) {
    "use strict";
    e(document).ready(function() {
        
        setTimeout(function() {
        
        e("#ghm-offer-selector").removeClass("ghm-hidden");
        const t = e("body").hasClass("ghm-logged-in");
        const a = e(".ghm-offer-selector").data("forceMyAccountPrice") === 1;
        const i = e("body").hasClass("ghm-ambassador");
        const s = e("body").hasClass("ghm-aspire");
        const o = Cookies.get("tcrParams") ? Cookies.get("tcrParams").substring(1) : "";
        const n = e(".ghm-offer-selector").data("showSubscriptionTermsBox") === 1;
        const c = e(".add-to-cart");
        const d = e(".out-of-stock-message"); 
        const r = e(".notify-me-form");
        const h = e(".product-option").data("outOfStock") === 1;
        function m(e) {
            const t = Cookies.get("ambassador_code");
            const a = Cookies.get("ambassador_firstName");
            const i = Cookies.get("ambassador_lastName");
            if (o) {
                const t = new URLSearchParams(o);
                t.forEach(function(t, a) {
                    e.set(a, t)
                })
            }
            t && e.set("ambassador_code", t);
            a && e.set("ambassador_firstName", a);
            i && e.set("ambassador_lastName", i)
        }
        function p(t) {
            if (t) {
                c.addClass("disabled-btn").hide();
                d.show();
                const t = r.data("emailListId");
                r.toggle(t != (null || ""));
                e(".disclaimer").hide()
            } else {
                c.removeClass("disabled-btn").show();
                d.hide();
                r.hide();
                e(".disclaimer").show()
            }
        }
        p(h);
        const u = e("[name=purchase-type-option]");
        
        if (!t) {

        }
        if (a || i || s) {
            e(".purchase-type-options").show();
            e(".subscribe-save-message-container").show()
        }
        const l = e("[name^=one-time-standard], [name^=one-time-my-account], [name^=subscribe-save-my-account]");
        l.each(function(t, a) {
            if (e(this).parent().data("index") == 1) {
                e(this).prop("checked", true);
                e(this).parent().addClass("active")
            }
        });
        const f = e("[name=purchase-type-option]:checked").val() == "One-Time Purchase";
        const v = e("[name=purchase-type-option]:checked").val() == "Subscribe & Save";
        function b(t) {
            const a = Cookies.get("tcrReturningCustomer");
            const i = Cookies.get("ambassador_code");
            const s = Cookies.get("ambassador_firstName");
            const o = Cookies.get("ambassador_lastName");
            const n = Cookies.get("tcrReferrer");
            const c = Cookies.get("tcrPagePath");
            const d = Cookies.get("tcrMedium");
            const r = Cookies.get("tcrCampaign");
            let h = e(`${t} input:checked`).val();
            let p = e(`${t} input:checked`).parent().data("price");
            if (e(".add-to-cart").length) {
                let u = new URL(e(".add-to-cart").data("cartUrl"));
                let l = new URLSearchParams(u.search);
                l.set("product1", h);
                if (t.includes("subscribe-save-my-account")) {
                    l.set("product1", h + ":s")
                } else {
                    l.set("product1", h)
                }
                a && l.set("tcrReturningCustomer", a);
                i && l.set("ambassador_code", i);
                s && l.set("ambassador_firstName", s);
                o && l.set("ambassador_lastName", o);
                n && l.set("utm_source", n);
                c && l.set("utm_content", c);
                d && l.set("utm_medium", d);
                r && l.set("utm_campaign", r);
                m(l);
                e(".add-to-cart").attr("href", `${u.origin}${u.pathname}?${l.toString()}`);
                e(".add-to-cart").text(`Add To Cart - $${p}`)
            }
        }
        
        if (t || i || s) {
            e(".one-time-my-account").each(function(t) {
                e(this).show()
            });
            e(".subscribe-save-my-account").each(function(t) {
                e(this).show()
            });
            e(".one-time-standard").each(function(t) {
                e(this).hide()
            });
            e(".logged-out-message-container").hide()
        } else {
            e(".one-time-my-account").each(function(t) {
                e(this).hide()
            });
            e(".subscribe-save-my-account").each(function(t) {
                e(this).hide()
            });
            e(".one-time-standard").each(function(t) {
                e(this).show()
            });
            b(".one-time-standard")
        }
        if ((t || i || s) && f) {
            e(".one-time-my-account").each(function(t) {
                e(this).show()
            });
            e(".subscribe-save-my-account").each(function(t) {
                e(this).hide()
            });
            e(".one-time-standard").each(function(t) {
                e(this).hide()
            });
            e(".subscribe-save-message-container").hide();
            b(".one-time-my-account")
        }
        if ((t || i || s) && v) {
            e(".one-time-my-account").each(function(t) {
                e(this).hide()
            });
            e(".subscribe-save-my-account").each(function(t) {
                e(this).show()
            });
            e(".one-time-standard").each(function(t) {
                e(this).hide()
            });
            e(".subscribe-save-message-container").show();
            b(".subscribe-save-my-account")
        }
        u.on("change", function() {
            e(this).prop("checked", true);
            const o = e("[name=variant-select] option:selected, [name=variant-option]:checked").val() ?? e(".product-option").data("familyId");
            
            if (e(this).val() === "One-Time Purchase" && (!t || !i || !s)) {
                e(".one-time-my-account").each(function(t) {
                    e(this).hide()
                });
                e(".subscribe-save-my-account").each(function(t) {
                    e(this).hide()
                });
                e(".one-time-standard").each(function(t) {
                    e(this).show()
                });
                e(".subscribe-save-message-container").hide();
                e(".subsave-benefits").hide();
                e(".add-to-cart").removeClass("disabled-btn");
                b(`[data-family-id=${o}] .one-time-standard`)
            }
            if (e(this).val() === "Subscribe & Save" && (!t || !i || !s)) {
                //e(".add-to-cart").addClass("disabled-btn");
                e(".subsave-benefits").show();
            }
            if (e(this).val() === "One-Time Purchase" && (t || i || s)) {
                e(".one-time-my-account").each(function(t) {
                    e(this).show()
                });
                e(".subscribe-save-my-account").each(function(t) {
                    e(this).hide()
                });
                e(".one-time-standard").each(function(t) {
                    e(this).hide()
                });
                e(".subscribe-save-message-container").hide();
                e(".add-to-cart").removeClass("disabled-btn");
                b(`[data-family-id=${o}] .one-time-my-account`)
            }
            if (e(this).val() === "Subscribe & Save" && (t || i || s)) {
                e(".add-to-cart").removeClass("disabled-btn");
                e(".subscribe-save-my-account").each(function(t) {
                    e(this).show()
                });
                e(".one-time-my-account").each(function(t) {
                    e(this).hide()
                });
                e(".one-time-standard").each(function(t) {
                    e(this).hide()
                });
                e(".subscribe-save-message-container").show();
                e(".subsave-benefits").show();
                b(`[data-family-id=${o}] .subscribe-save-my-account`);
                const a = e("[name=subscribe-save-checkbox]");
                if (a.prop("checked")) {
                    e(".add-to-cart").removeClass("disabled-btn")
                } else {
                    n ? e(".add-to-cart").addClass("disabled-btn") : e(".add-to-cart").removeClass("disabled-btn")
                }
                a.on("change", function() {
                    if (e(this).prop("checked")) {
                        e(".add-to-cart").removeClass("disabled-btn");
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                            "event": "subsavechecked",
                            "sessionID": Cookies.get("GAID"),
                            "source": "BrandSite",
                            "email": t ? JSON.parse(Cookies.get("ghm_auth_data")).email : "",
                            "firstName": t ? JSON.parse(Cookies.get("ghm_auth_data")).firstName : ""
                        })
                    } else {
                        n ? e(".add-to-cart").addClass("disabled-btn") : e(".add-to-cart").removeClass("disabled-btn")
                    }
                })
            }
        });
        const savedPurchaseType = "Subscribe & Save";
        if (savedPurchaseType) {
            u.each(function () {
                if (e(this).val() === savedPurchaseType) {
                    e(this).prop("checked", true).trigger("change"); // ✅ triggers handler
                }
            });
        }
        const g = e("[name=variant-option], [name=variant-select]");
        g.on("change", function() {
            let o, n, c;
            if (e(this).is("select")) {
                const t = e(this).find("option:selected");
                o = t.val();
                n = t.data("reviewId");
                c = t.data("productName")
            } else {
                e(this).prop("checked", true);
                o = e(this).val();
                n = e(this).data("reviewId");
                c = e(this).data("productName");
            }
            const d = e(`.product-option[data-family-id=${o}]`).data("outOfStock") === 1;
            p(d);
            e(".logged-in-subscribe-save-message > span").text(c);
            e(".product-option").hide();
            e(".product-options").find(`[data-family-id=${o}]`).show();
            e("[id*=pr-reviewsnippet]:not(.e-loop-item [id*=pr-reviewsnippet])").hide();
            e(`#pr-reviewsnippet-${n}:not(.e-loop-item [id*=pr-reviewsnippet])`).show();
            e("[id*=pr-reviewdisplay]").hide();
			e(`.pr-disclaimer`).hide();
            e(`#pr-reviewdisplay-${n}`).show();
            e(`#pr-reviewdisplay-${n}`).next(`.pr-disclaimer`).show(); 
            e("[id*=pr-questionsnippet]").hide();
            e(`#pr-questionsnippet-${n}`).show();
            e("[id*=pr-questiondisplay]").hide();
            e(`#pr-questiondisplay-${n}`).show();
            if (e(".purchase-type-option input:checked").val() == "One-Time Purchase" && (!t || !a || !i || !s)) {
                const t = e(".product-options").find(`[data-family-id=${o}] .one-time-standard input:checked`).parent().data("price");
                const a = e(".product-options").find(`[data-family-id=${o}] .one-time-standard input:checked`).parent().find(".my-account-price").text();
                const i = e(".product-options").find(`[data-family-id=${o}] .one-time-standard input:checked`).parent().data("variantId");
                let s = new URL(e(".add-to-cart").data("cartUrl"));
                let n = new URLSearchParams(s.search);
                n.set("product1", i);
                m(n);
                e(".saving-price").text(a);
                e(".add-to-cart").attr("href", `${s.origin}${s.pathname}?${n.toString()}`);
                e(".add-to-cart").text(`Add To Cart - $${t}`)
            }
            if (e(".purchase-type-option input:checked").val() == "One-Time Purchase" && (t || i || s)) {
                const t = e(".product-options").find(`[data-family-id=${o}] .one-time-my-account input:checked`).parent().data("price");
                const a = e(".product-options").find(`[data-family-id=${o}] .one-time-my-account input:checked`).parent().data("variantId");
                let i = new URL(e(".add-to-cart").attr("href"));
                let s = new URLSearchParams(i.search);
                s.set("product1", a);
                m(s);
                e(".add-to-cart").attr("href", `${i.origin}${i.pathname}?${s.toString()}`);
                e(".add-to-cart").text(`Add To Cart - $${t}`)
            }
            if (e(".purchase-type-option input:checked").val() == "Subscribe & Save" && (t || i || s)) {
                const t = e(".product-options").find(`[data-family-id=${o}] .subscribe-save-my-account input:checked`).parent().data("price");
                const a = e(".product-options").find(`[data-family-id=${o}] .subscribe-save-my-account input:checked`).parent().data("variantId");
                let i = new URL(e(".add-to-cart").data("cartUrl"));
                let s = new URLSearchParams(i.search);
                s.set("product1", a + ":s");
                m(s);
                e(".add-to-cart").attr("href", `${i.origin}${i.pathname}?${s.toString()}`);
                e(".add-to-cart").text(`Add To Cart - $${t}`)
            }
        });
        l.on("change", function() {
            e(this).prop("checked", true);
            let t = new URL(e(".add-to-cart").data("cartUrl"));
            let a = new URLSearchParams(t.search);
            a.set("product1", e(this).val());
            if (e(this).parent().data("productType") == "subscribe-save-my-account") {
                a.set("product1", e(this).val() + ":s")
            } else {
                a.set("product1", e(this).val())
            }
            m(a);
            e(".add-to-cart").attr("href", `${t.origin}${t.pathname}?${a.toString()}`);
            e(".add-to-cart").text(`Add To Cart - $${e(this).parent().data("price")}`);
            //e(".saving-price").text(e(this).parent().find(".my-account-price").text());
            l.parent().removeClass("active");
            e(this).parent().addClass("active")
        });
        function y() {
            return e(".product-option:visible").data("familyId")
        }
        if (Cookies.get(`ghm_notify_me_submitted_${y()}`)) {
            e(".notify-me-form").remove();
            e(".notify-me-message").html(e(".notify-me-message").data("outOfStockMessage"))
        }
        e(".notify-me-form").on("submit", function(t) {
            t.preventDefault();
            const a = e.trim(e("#first-name").val());
            const i = e.trim(e("#last-name").val());
            const s = e.trim(e("#email").val());
            const o = e.trim(e(".notify-me-form").data("emailListId"));
            const n = JSON.stringify({
                "firstName": a,
                "lastName": i,
                "email": s,
                "listId": o
            });
            e.ajax({
                type: "POST",
                url: e(".notify-me-form").attr("action"),
                headers: {
                    "Content-Type": "application/json"
                },
                dataType: "json",
                data: n,
                beforeSend: function() {
                    e(".notify-me-submit-btn").prop("disabled", true);
                    e(".btn-text").hide();
                    e(".loading").show()
                },
                complete: function() {
                    e(".notify-me-submit-btn").prop("disabled", false);
                    e(".btn-text").show();
                    e(".loading").hide()
                },
                success: function(t) {
                    if (t) {
                        Cookies.set(`ghm_notify_me_submitted_${y()}`, true, {
                            expires: 1,
                            path: "/"
                        });
                        e(".notify-me-form").remove();
                        e(".notify-me-message").html(e(".notify-me-message").data("outOfStockMessage"))
                    }
                },
                error: function(t) {
                    e(".notify-me-message").html(`<span class='error'>Error: ${t.responseJSON.message}</span>`);
                    console.error(t)
                }
            })
        });
        const w = e(".subscribe-save-my-account, .one-time-my-account, .one-time-standard");
        const k = e(".best-seller-flag, .best-value-flag");
        if (k.length) {
            w.each(function() {
                e(this).find(".right").addClass("best-seller-flag-space");
                e(this).find(".right .badge").addClass("with-flags");
                if (e(this).find(".badge.with-flags").length) {
                    e(this).find(".quantity-container").addClass("with-flags");
                    e(this).find(".savings-message").addClass("with-flags")
                }
            })
        }
        
        //move custom element sub-save benefits box below the product product-options
        
        const subsave = document.querySelector('.subsave-benefits');
        const productOptionsBlock = document.querySelector('.product-options');
        const buttonContainerBlock = document.querySelector('.button-container');
        
        if (subsave && buttonContainerBlock) {
          buttonContainerBlock.parentNode.insertBefore(subsave, buttonContainerBlock);
        }
        
        
        e(".custom-os").show();
        
        function moveAndToggleButtonContainer2() {
            const buttonContainer2 = document.querySelector(".button-container2");
            const buttonContainer = document.querySelector(".button-container");
            const body = document.body;
            const selectedPurchaseOption = document.querySelector(".purchase-type-option input:checked");
        
            if (!buttonContainer || !buttonContainer2) return;
        
            const shouldShowButtonContainer2 = 
                !body.classList.contains("ghm-logged-in") &&
                selectedPurchaseOption &&
                selectedPurchaseOption.value === "Subscribe & Save";
        
            if (shouldShowButtonContainer2) {
                // Insert buttonContainer2 before buttonContainer if not already in place
                if (buttonContainer2.previousElementSibling !== buttonContainer2) {
                    buttonContainer.parentNode.insertBefore(buttonContainer2, buttonContainer);
                }
                buttonContainer2.style.display = "block";
                buttonContainer.style.display = "none";
            } else {
                buttonContainer2.style.display = "none";
                buttonContainer.style.display = "block";
            }
        }
        
            // Add an event listener so that when the purchase type changes,
        // both updateOrPayText and moveAndToggleButtonContainer2 are run.
        const purchaseTypeInputs2 = document.querySelectorAll(".purchase-type-option input");
        purchaseTypeInputs2.forEach(input => {
            input.addEventListener("change", () => {
                moveAndToggleButtonContainer2();
            });
        });
        
        // Initial check on page load
        moveAndToggleButtonContainer2();
        
         // Replace .saving-price with .saving-price2
        const savingPriceElement = document.querySelector(".logged-out-message-container .saving-price");
        if (savingPriceElement) {
            savingPriceElement.classList.replace("saving-price", "saving-price2");
        }
    
        // Function to update the saving price text from the add-to-cart button
        function updatePrice() {
            const addToCartButton = document.querySelector(".add-to-cart");
            const savingPrice2 = document.querySelector(".logged-out-message-container .saving-price2");
            if (addToCartButton && savingPrice2) {
                const match = addToCartButton.textContent.match(/\$(\d+(\.\d{1,2})?)/);
                if (match) {
                    let price = match[1]; // Extracts the price (without the "$")
                    // Price mapping:
                    // 79.95 -> 49.95
                    // 215.85 -> 134.85
                    // 407.70 -> 251.70
                    const priceMap = {
                        "79.95": "49.95",
                        "215.85": "134.85",
                        "407.70": "251.70"
                    };
                    if (priceMap[price]) {
                        price = priceMap[price];
                    }
                    savingPrice2.textContent = price;
                }
            }
        }
    
        // Set up a MutationObserver on the add-to-cart button to detect text changes.
        const addToCartButton = document.querySelector(".add-to-cart");
        if (addToCartButton) {
            const observer = new MutationObserver(updatePrice);
            observer.observe(addToCartButton, { childList: true, subtree: true, characterData: true });
        }
    
        // Initial update of the price
        updatePrice();
    
    
        function updateOrPayText() {
            const message = document.querySelector(".logged-out-message-container .message");
            if (!message) return;
        
            const purchaseTypeInput = document.querySelector(".purchase-type-option input:checked");
            const container = document.querySelector(".logged-out-message-container");
        
            const existingMessage2 = container.querySelector(".message2");
        
            if (purchaseTypeInput && purchaseTypeInput.value === "Subscribe & Save") {
                message.style.display = "none";
                container.style.setProperty("display", "none", "important");
                if (!existingMessage2) {
                    const message2 = document.createElement("div");
                    message2.className = "message2";
                    message2.innerHTML = `<p>Unlock your <strong>FREE</strong> My Health Account Benefits</p>`;
                    message.insertAdjacentElement("afterend", message2); // 👈 right after .message
                }
            } else {
                message.style.display = "inline";
                if (existingMessage2) {
                    existingMessage2.remove();
                }
                if (!t){
                    container.style.setProperty("display", "flex", "important"); 
                }
            }
        }
    
    
        // Initial update of the "Or pay" text.
        updateOrPayText();
        
             // Add an event listener so that when the purchase type changes,
        // both updateOrPayText and moveAndToggleButtonContainer2 are run.
        const purchaseTypeInputs = document.querySelectorAll(".purchase-type-option input");
        purchaseTypeInputs.forEach(input => {
            input.addEventListener("change", () => {
                updateOrPayText();
            });
        });
    
        
        }, 50); // 300ms delay
    })
}
)(jQuery);