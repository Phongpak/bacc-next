import React from "react";

// router
import { useRouter } from "next/router";
const ExploreFilterLeft = () => {
  const router = useRouter();
  const params = router.query;

  // state
  const [isOpen, setIsOpen] = React.useState(false);
  const [type, setType] = React.useState("");

  const PROFILE_FILTER = [
    {
      type: "Sort by",
      filter: [
        {
          name: "All",
        },
        {
          name: "Most view",
        },
        {
          name: "Most favorited",
        },
        {
          name: "On Auction",
        },
      ],
    },
    {
      type: "Collection",
      filter: [
        {
          name: "All",
        },
        {
          name: "Gaming",
        },
        {
          name: "Art",
        },
        {
          name: "Nature",
        },
        {
          name: "Collectibles",
        },
      ],
    },
    {
      type: "Price",
      filter: [
        {
          name: "BUSD",
        },
      ],
    },
  ];

  const handleOpenTab = (key) => {
    setIsOpen(!isOpen);
    setType(key);
    // switch (key) {
    //   case "Collection":
    //     return setIsOpenCol(!isOpenCol);
    //   case "Price":
    //     return setIsOpenPrice(!isOpenPrice);
    //   case "Sort by":
    //     return setIsOpenSort(!isOpenSort);
    //   default:
    //     return key;
    // }
  };

  return (
    <section className="bg-area-cream z-index-1">
      <div className="select-category-title-products">
        <i className="flaticon-filter bg-transparent"></i>Profile filter
      </div>

      <div className="sort-by-content">
        {PROFILE_FILTER.map((item, index) => (
          <>
            <div className="sort-by-header" key={`sort-by-header-${index}`}>
              <span key={`text-sort-by-header-${index}`}>{item.type}</span>
              <button
                key={`button-down-${index}`}
                onClick={() => handleOpenTab(item.type)}
              >
                <i className="fal fa-caret-down"></i>
              </button>
            </div>

            <div
              className="sort-by-content-item"
              key={`sort-by-content-item-${index}`}
            >
              {item.type !== "Price" &&
                item.filter.map((b, i) => (
                  <>
                    <button
                      key={`btn-sort-by-header-${i}`}
                      className={`${item.type}-btn Sort-by-btn ${
                        params.filter === undefined && b.name === "All"
                          ? "active"
                          : ""
                      }`}
                    >
                      {b.name}
                    </button>
                  </>
                ))}

              {/* filter price */}
              {item.type === "Price" && isOpen && (
                <div className="price-content-item" key={`Price-sort-${index}`}>
                  <input
                    key={`Price-input-min-${index}`}
                    type="number"
                    name="min"
                    className="input-min"
                    placeholder="Min"
                  />
                  <span>TO</span>
                  <input
                    type="number"
                    key={`Price-input-max-${index}`}
                    name="max"
                    className="input-max"
                    placeholder="Max"
                  />
                  <button className="price-btn">BUSD</button>
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default ExploreFilterLeft;
