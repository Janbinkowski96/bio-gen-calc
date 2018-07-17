from math import sqrt
import numpy as np
from scipy.stats import power_divergence
from scipy.stats.contingency import expected_freq
from scipy.stats import chi2_contingency
from scipy.stats import chisquare


class ChiSquareCalculation:
    def __init__(self, data):
        self.data = data
        self.result = {}

    def get_observed(self):
        all_lists = []
        for i in range(self.data["height"]):
            row = self.data["row-" + str(i)]
            float_row = list(map(float, row))
            all_lists.append(float_row)

        observed = np.array(all_lists)
        return observed

    def chi_square_standard(self):
        chi2, p, dof, ex = chi2_contingency(self.get_observed(), correction=False)
        self.result["chi2_standard"] = round(chi2, 5)
        self.result["p_standard"] = round(p, 5)
        self.result["dof"] = dof

    def chi_square_yats(self):
        observed_list = [self.get_observed()]
        observed = np.asarray(observed_list)
        expected = expected_freq(observed)
        dof = expected.size - sum(expected.shape) + expected.ndim - 1
        observed = observed + 0.5 * np.sign(expected - observed)
        chi2_yats, p_yats = power_divergence(observed, expected,
                                             ddof=observed.size - 1 - dof, axis=None,
                                             lambda_=None)
        self.result["chi2_yats"] = round(chi2_yats, 5)
        self.result["p_yats"] = round(p_yats, 5)

    def corelation(self):
        field_sum = float(self.data["field_sum"])
        if self.result["dof"] == 1:
            corelation_standard = sqrt(self.result["chi2_standard"] / field_sum)
            corelation_yats = sqrt(self.result["chi2_yats"] / field_sum)
            self.result["yule"] = True
        else:
            m = min(self.data["width"], self.data["height"])
            corelation_standard = sqrt(self.result["chi2_standard"] / (field_sum * (m - 1)))
            corelation_yats = sqrt(self.result["chi2_yats"] / (field_sum * (m - 1)))
            self.result["crammer"] = True
        self.result["corelation_standard"] = round(corelation_standard, 5)
        self.result["corelation_yats"] = round(corelation_yats, 5)

    def chi_square(self):
        self.get_observed()
        self.chi_square_standard()
        self.chi_square_yats()
        self.corelation()

        return self.result


class ChiSquareGoodness:
    def __init__(self, observed, expected):
        self.observed = list(map(float, observed))
        self.expected = list(map(float, expected))
        self.result_goodness = {}

    def chi_goodness_standard(self):
        chi2, p = chisquare(self.observed, f_exp=self.expected)
        self.result_goodness["chi2_standard"] = round(chi2, 5)
        self.result_goodness["p_standard"] = round(p, 5)
        self.result_goodness["dof"] = len(self.observed) - 1

    def chi_goodness_yats(self):
        observed = np.asarray(self.observed)
        expected = np.asarray(self.expected)
        observed = observed + 0.5 * np.sign(expected - observed)
        chi2_yats, p_yats = power_divergence(observed, expected, ddof=0)
        self.result_goodness["chi2_yats"] = round(chi2_yats, 5)
        self.result_goodness["p_yats"] = round(p_yats, 5)

    def chi_square_goodness(self):
        self.chi_goodness_standard()
        self.chi_goodness_yats()
        self.result_goodness["sum_observed"] = sum(self.observed)
        self.result_goodness["sum_expected"] = sum(self.expected)
        return self.result_goodness
