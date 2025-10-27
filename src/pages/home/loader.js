import { userService } from "../../service/user.service";

export async function homeLoader({ params }) {
  const { id } = params;

  if (!id) {
    throw new Error("ID manquant", { status: 400 });
  }

  const results = await Promise.allSettled([
    userService.getUser(id),
    userService.getUserActivity(id),
    userService.getUserAverageSessions(id),
    userService.getUserPerformance(id),
  ]);

  if (results[0].status === "rejected") {
    throw new Error("Utilisateur non trouvé", { status: 404 });
  }

  return {
    user: results[0].value,
    activity: results[1].status === "fulfilled" ? results[1].value : null,
    averageSessions:
      results[2].status === "fulfilled" ? results[2].value : null,
    performance: results[3].status === "fulfilled" ? results[3].value : null,
  };
}
