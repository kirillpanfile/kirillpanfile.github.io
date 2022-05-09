import { Server } from "miragejs";
import projects from "./db/projects";
import me from "./db/me";

export default {
  install: () => {
    const server = new Server({
      seeds(server) {
        server.db.loadData({
          projects: projects,
          me: me,
        });
      },
      fixtures: {
        projects: projects,
        me: me,
      },
      routes() {
        this.namespace = "api";
        this.get("/projects", (schema) => {
          return schema.db.projects;
        });
        this.get("/me", (schema) => {
          return schema.db.me;
        });
      },
    });
  },
};
