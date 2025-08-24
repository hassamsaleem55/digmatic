const arrAchievements = [
  { id: 1, title: "Working Hours", count: "5600", icon: "mdi mdi-clock" },
  { id: 2, title: "Happy Clients", count: "220", icon: "mdi mdi-emoticon" },
  { id: 3, title: "Awards", count: "108", icon: "mdi mdi-trophy-variant" },
  { id: 4, title: "Projects per Year", count: "650", icon: "mdi mdi-cup" },
];

function Achievements() {
  return (
    <section className="dark-bg pt-80 pb-80">
      <div className="container-fluid">
        <div className="row">
          {arrAchievements.map(({ id, title, count, icon }) => {
            return (
              <div
                key={id}
                className="col-md-3 counter text-center col-sm-6 wow fadeTop"
                data-wow-delay={`0.${id}s`}
              >
                <i className={`${icon} blue-icon font-30px`} />
                <h2 className="count white-color font-700">{count}</h2>
                <h3>{title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
