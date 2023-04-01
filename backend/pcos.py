# -*- coding: utf-8 -*-
"""PCOS_(Latest_updated).ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1IJWWWiQla186BFos1d7km3OnYc7MTxsk
"""

import warnings
warnings.filterwarnings("ignore")

# Commented out IPython magic to ensure Python compatibility.
import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
# %matplotlib inline

data_withoutinfertility = pd.read_excel(r'content/PCOS_data_without_infertility.xlsx',sheet_name='Full_new')
data_infertility = pd.read_csv(r'content/PCOS_infertility.csv')

data_withoutinfertility.head()

#data_infertility.head()

data_infertility.head()

df = pd.merge(data_withoutinfertility, data_infertility,suffixes={'','_y'}, on='Patient File No.', how="left",)

df.head()

df.columns

df.shape

"""# EDA"""

#Check data types
df.dtypes

#Check Info
df.info()

# Convert string data type to float

df['AMH(ng/mL)'] = pd.to_numeric(df['AMH(ng/mL)'],errors = 'coerce')
df['II    beta-HCG(mIU/mL)'] = pd.to_numeric(df['II    beta-HCG(mIU/mL)'],errors = 'coerce')

#Check Missing Values
df.isnull().sum()

df.drop([ 
       'Unnamed: 44', 'Sl. No_y', 'PCOS (Y/N)_y', '  I   beta-HCG(mIU/mL)_y',
       'II    beta-HCG(mIU/mL)_y', 'AMH(ng/mL)_y'], axis=1, inplace= True)

#Null-Value impute 
df['Fast food (Y/N)'].fillna(0, inplace = True)

df['Marraige Status (Yrs)'] = df['Marraige Status (Yrs)'].dropna().median()

df['II    beta-HCG(mIU/mL)'] = df['II    beta-HCG(mIU/mL)'].dropna().median()
df['AMH(ng/mL)'] = df['AMH(ng/mL)'].dropna().median()

#Check Missing Values after Impute
df.isnull().sum()

df.head(5)

df.reset_index().columns

"""Summary Statistics"""

df.describe().transpose()

df.pivot_table(index='PCOS (Y/N)')

# Target Value Count
df['PCOS (Y/N)'].value_counts()

# Plot the target variable
df['PCOS (Y/N)'].value_counts().plot.bar();

# Pip install sweetviz

# import sweetviz as sv
# report = sv.analyze(df, target_feat='PCOS (Y/N)')
# report.show_html('employee.html')



#View Feature correlated with PCOS
# plt.figure(figsize=(8, 12))
# heatmap = sns.heatmap(df.corr()[['PCOS (Y/N)']].sort_values(by='PCOS (Y/N)', ascending=False), vmin=-1, vmax=1, annot=True, cmap='BrBG')
# heatmap.set_title('Features Correlating with PCOS', fontdict={'fontsize':18}, pad=16);

# Plot PCOS vs other features

features=['Weight (Kg)', 'Height(Cm) ', 'BMI',
       'Blood Group', 'Pulse rate(bpm) ']

fig=plt.subplots(figsize=(10,15))
for i, j in enumerate(features):
    plt.subplot(4, 2, i+1)
    plt.subplots_adjust(hspace = 1.0)
    sns.countplot(x=j,data = df, hue='PCOS (Y/N)')
    plt.xticks(rotation=90)
    plt.title(j)

"""Split the DataSet"""

X = df.drop(['PCOS (Y/N)'], axis=1)
y = df['PCOS (Y/N)']

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=44)

# Handling Imbalance Data 
from imblearn.over_sampling import RandomOverSampler
ros = RandomOverSampler(sampling_strategy='minority', random_state=1)

X_train_ros, y_train_ros = ros.fit_resample(X_train, y_train)
np.bincount(y_train_ros)

# Check the target value after resampling on imbalance data
y_train_ros.value_counts()

"""# Model & Evaluation

Logistic Regression
"""

# from sklearn.linear_model import LogisticRegression
# lr = LogisticRegression()
# # fit the model
# lr.fit(X_train_ros, y_train_ros)

# # predict labels on X_test
# y_pred_lr = lr.predict(X_test)
# y_pred_lr

# # accuracy on test set
# from sklearn.metrics import accuracy_score
# accuracy_score(y_test, y_pred_lr)

# # AUC plot
# from sklearn.metrics import plot_roc_curve
# plot_roc_curve(lr, X_test, y_test)

# # confusion matrix
# from sklearn.metrics import confusion_matrix
# print(confusion_matrix(y_test, y_pred_lr))

# # classification report
# from sklearn.metrics import classification_report
# print(classification_report(y_test, y_pred_lr,target_names=['PCOS No', 'PCOS yes']))

"""Decision Trees"""

# from sklearn.tree import DecisionTreeClassifier



# clf = DecisionTreeClassifier(random_state=42, criterion="entropy",
#                              min_samples_split=10, min_samples_leaf=10, max_depth=3, max_leaf_nodes=5)
# clf.fit(X_train_ros, y_train_ros)

# y_pred_dt = clf.predict(X_test)



# # classification report
# from sklearn.metrics import classification_report
# print(classification_report(y_test, y_pred_dt,target_names=['PCOS No', 'PCOS yes']))

# from sklearn.metrics import accuracy_score, cohen_kappa_score, f1_score, log_loss

# print("Accuracy = {:.2f}".format(accuracy_score(y_test, y_pred_dt)))
# print("Kappa = {:.2f}".format(cohen_kappa_score(y_test, y_pred_dt)))
# print("F1 Score = {:.2f}".format(f1_score(y_test, y_pred_dt)))
# print("Log Loss = {:.2f}".format(log_loss(y_test, y_pred_dt)))

# AUC plot
# from sklearn.metrics import plot_roc_curve
# plot_roc_curve(clf, X_test, y_test)

"""Random Forest"""

from sklearn.ensemble import RandomForestClassifier

clf_rf = RandomForestClassifier(random_state=42,n_estimators = 100)

# clf_rf.fit(X_train_ros, y_train_ros)

# y_pred_rf = clf.predict(X_test)

# classification report
# from sklearn.metrics import classification_report
# print(classification_report(y_test, y_pred_rf,target_names=['PCOS No', 'PCOS yes']))

# AUC plot
# from sklearn.metrics import plot_roc_curve
# plot_roc_curve(clf_rf, X_test, y_test)

"""Naive Bayes"""

# from sklearn.naive_bayes import GaussianNB
# gnb = GaussianNB()
# gnb = gnb.fit(X_train_ros, y_train_ros)

# y_pred_gnb = gnb.predict(X_test)

# confusion_matrix(y_test, y_pred_gnb)
# print(classification_report(y_test, y_pred_gnb))

# print("Accuracy = {:.2f}".format(accuracy_score(y_test, y_pred_gnb)))
# print("Kappa = {:.2f}".format(cohen_kappa_score(y_test, y_pred_gnb)))
# print("F1 Score = {:.2f}".format(f1_score(y_test, y_pred_gnb)))
# print("Log Loss = {:.2f}".format(log_loss(y_test, y_pred_gnb)))

"""Recursive Feature Elimination (Using Wrapper Method)"""

# from sklearn.feature_selection import RFECV, RFE


# clf = DecisionTreeClassifier(random_state=42)
# sel = RFE(estimator=clf, n_features_to_select=10)
# sel = sel.fit(X_train_ros, y_train_ros)

# X_train_new = sel.transform(X_train_ros)
# X_test_new = sel.transform(X_test)

# X_train_new.shape

# from sklearn.tree import DecisionTreeClassifier



# clf_rfe = DecisionTreeClassifier(random_state=42)
# clf_rfe.fit(X_train_new, y_train_ros)

# y_pred_dt_rfe = clf_rfe.predict(X_test_new)

# # classification report
# from sklearn.metrics import classification_report
# print(classification_report(y_test, y_pred_dt_rfe,target_names=['PCOS No', 'PCOS yes']))

"""# Hyperparameter Tuning

Grid Search
"""

# Helper function to print out the results of hyperparmater tuning in a nice table.

# def cv_results_to_df(cv_results):
#     results = pd.DataFrame(list(cv_results['params']))
#     #results['mean_fit_time'] = cv_results['mean_fit_time']
#     #results['mean_score_time'] = cv_results['mean_score_time']
#     #results['mean_train_score'] = cv_results['mean_train_score']
#     #results['std_train_score'] = cv_results['std_train_score']
#     results['mean_val_score'] = cv_results['mean_test_score']
#     #results['std_val_score'] = cv_results['std_test_score']
#     results['rank_val_score'] = cv_results['rank_test_score']

#     results = results.sort_values(['mean_val_score'], ascending=False)
#     return results

# from sklearn.model_selection import GridSearchCV

# clf = DecisionTreeClassifier(random_state=42)

# params = {'criterion': ('gini', 'entropy'), 
#           'splitter': ('best', 'random'), 
#           'class_weight': ('balanced', None), 
#           'max_depth': [2, 5, 10, 20], 
#           'min_samples_leaf': [1, 5, 10],
#           'max_features':[0.25, 0.5, 0.75, 1.0]}

# search = GridSearchCV(clf, params, scoring='f1_macro', cv=10, verbose=1)
# search = search.fit(X_train_new, y_train_ros)

# y_pred_cv = search.predict(X_test_new)
# print(classification_report(y_test, y_pred_cv))

# search.best_params_

# cv_results_to_df(search.cv_results_)

"""Ensemble (Stacking Method)"""

from sklearn.ensemble import StackingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler



rf = RandomForestClassifier(n_estimators=100,random_state=100)
gb = GradientBoostingClassifier(n_estimators=100,random_state=100)
svm = make_pipeline(StandardScaler(), SVC(random_state=100))

estimators = [('RF', rf),
          ('GB', gb),
          ('SVM', svm)]

Model = StackingClassifier(estimators=estimators, final_estimator=LogisticRegression())

Model.fit(X_train_ros,y_train_ros).score(X_test,y_test)
first_row = X.iloc[[2]]

# print(X.columns)
print("=========")
print(X.iloc[[1]])
prediction1 = Model.predict(X.iloc[[1]])
print(prediction1)
X.loc[1, ' Age (yrs)'] = 1
print("=========")
print(X.iloc[[1]])

# print(X.loc[1])
# myDf = pd.DataFrame([param])
# Get the prediction for the first row using your trained model
prediction = Model.predict(X.iloc[[1]])


# Print the prediction
print(prediction)



from flask import Flask, jsonify, request
import pandas as pd
import json
from flask_cors import CORS


app = Flask('ml')
CORS(app)

# @app.route('/', methods=['GET'])
# def predict():
#     return "tk tk tk"

# # Endpoint to create a new guide
@app.route('/predict', methods=["POST"])
def predict_pcos():
    age = request.json['age']
    weight = request.json['weight']

    response = {
        "res": False
    };
    print("age" + age)
    return json.dumps(response)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9090, debug=True)


